
/* IMPORT */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

/* HELPERS */

const filter = tlds => {

  return tlds.filter ( tld => tld.length >= 3 );

};

const get = () => {

  const tldsPath = path.join ( process.cwd (), 'node_modules', 'tlds', 'index.json' );
  const tldsContent = fs.readFileSync ( tldsPath, 'utf-8' );
  const tlds = JSON.parse ( tldsContent );

  return tlds;

};

const stats = ( tlds, category ) => {

  console.log ( `${category} - TLDs: ${tlds.length}` );
  console.log ( `${category} - Characters: ${tlds.join ( '' ).length}` );

};

const write = tlds => {

  const PATH = path.join ( process.cwd (), 'src', 'index.ts' );

  const SOURCE = `
/* MAIN */

const tlds = ${JSON.stringify ( tlds )};

/* EXPORT */

export default tlds;
  `;

  fs.writeFileSync ( PATH, SOURCE );

};

/* MAIN */

const update = () => {

  let tlds = get ();

  stats ( tlds, 'Start' );

  tlds = filter ( tlds );

  stats ( tlds, 'End' );

  write ( tlds );

};

update ();
