# Linkify-it TLDs

Comprehensive list of TLDs, sourced from ICANN, for [linkify-it](https://github.com/markdown-it/linkify-it).

This is basically the same as [node-tls](https://github.com/stephenmathieson/node-tlds), but TLDs that are shorter than 3 characters are not listed as [linkify-it](https://github.com/markdown-it/linkify-it) uses a [regex](https://github.com/markdown-it/linkify-it/blob/6f3c94916a5e1bd9a246cb7166ec3ee6adbde6bb/index.js#L116-L117) for matching them all. This improves performance slightly.

## Install

```sh
npm install linkify-it-tlds
```

## Usage

```ts
import linkify from 'linkify-it';
import tlds from 'linkify-it-tlds';

// Let's add these TLDs to linkify-it

const instance = linkify ();

instance.tlds ( tlds, true ); // It's important to pass "true", as that ensures the default TLDs will be still supported, as this package doesn't provide them
```

## License

MIT © Fabio Spampinato
