/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const slugify = require('slugify');

const bids = [];

fs.createReadStream(path.resolve(__dirname, 'bids.csv'))
  .pipe(csv.parse({ headers: true }))
  .on('error', (error) => console.error(error))
  .on('data', (row) => {
    const { author, title, type, format, title2, type2, format2, title3, type3, format3 } =
      Object.entries(row).reduce((acc, [key, value]) => ({ ...acc, [key]: value.trim() }), {});

    if (!author) return;

    bids.push({
      author,
      title,
      fileName: slugify(`${author}-${title}`, { lower: true, locale: 'pl' }),
      type,
      format,
    });

    if (!title2) return;
    bids.push({
      author,
      title: title2,
      fileName: slugify(`${author}-${title2}`, { lower: true, locale: 'pl' }),
      type: type2,
      format: format2,
    });

    if (!title3) return;
    bids.push({
      author,
      title: title3,
      fileName: slugify(`${author}-${title3}`, { lower: true, locale: 'pl' }),
      type: type3,
      format: format3,
    });
  })
  .on('end', () => {
    bids.forEach((bid) => {
      fs.writeFile(
        path.resolve(__dirname, '..', 'cms', 'bids', `${bid.fileName}.md`),
        `---
title: "${bid.title}"
artist: "${bid.author}"
image:
type: "${bid.type}"
url:
format: "${bid.format}"
featured: false
---
`,
        (err) => {
          if (err) {
            console.error(err);
          }
          // file written successfully
        },
      );
    });
  });
