/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const links = require('./links.json');

fs.readdir(path.resolve(__dirname, '..', 'cms', 'bids'), function (err, filenames) {
  if (err) {
    onError(err);
    return;
  }
  filenames.forEach(function (filename) {
    fs.readFile(
      path.resolve(__dirname, '..', 'cms', 'bids', filename),
      'utf-8',
      function (err, content) {
        if (err) {
          onError(err);
          return;
        }

        const newLink = links.find(
          (link) =>
            RegExp(`title: ${link.title}\n`, 'i').test(content) &&
            RegExp(`artist: ${link.artist}\n`, 'i').test(content),
        );
        if (!newLink) return;
        const withNewLink = content.replace(/(url:) (null|"")/g, `url: ${newLink.href}`);

        fs.writeFile(path.resolve(__dirname, '..', 'cms', 'bids', filename), withNewLink, (err) => {
          if (err) {
            console.error(err);
          }
          // file written successfully
        });
      },
    );
  });
});
