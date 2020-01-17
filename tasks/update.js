
/* IMPORT */

const fs = require ( 'fs' ),
      path = require ( 'path' ),
      tlds = require ( 'tlds' );

/* HELPERS */

function stats ( tlds, category ) {

  console.log ( `${category} - TLDs: ${tlds.length}` );
  console.log ( `${category} - Characters: ${tlds.join ( '' ).length}` );

}

function filter ( tlds ) {

  return tlds.filter ( tld => tld.length >= 3 );

}

function write ( tlds ) {

  const PATH = path.join ( process.cwd (), 'src', 'index.ts' );

  const SOURCE = `
/* TLDS */

const tlds = ${JSON.stringify ( tlds )};

/* EXPORT */

export default tlds;
  `;

  fs.writeFileSync ( PATH, SOURCE );

}

/* UPDATE */

function update ( tlds ) {

  stats ( tlds, 'Start' );

  tlds = filter ( tlds );

  stats ( tlds, 'End' );

  write ( tlds );

}

update ( tlds );
