/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

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

        const [name, value] = process.argv.slice(2);
        if (!name) {
          throw new Error('No new param name provided');
        }

        if (!value) {
          throw new Error('No new param default value provided');
        }
        const [, params] = content.split('---');

        const newParams = `${params}${name}: ${value}\n`;
        const newContent = content.replace(params, newParams);
        fs.writeFile(path.resolve(__dirname, '..', 'cms', 'bids', filename), newContent, (err) => {
          if (err) {
            console.error(err);
          }
          // file written successfully
        });
      },
    );
  });
});
