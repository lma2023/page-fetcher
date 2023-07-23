const request = require('request');
const fs = require('fs');

const fetch = function(argv) {
  const url = argv[2];
  const localPath = argv[3];
  request(url, (error, response, body) => {
    if (error) {
      console.log('Error:', error);
      return;
    }
    if (response.statusCode !== 200) {
      console.log('Invalid response:', response.statusCode);
      return;
    }

    fs.writeFile(localPath, body, err => {
      if (err) {
        console.error('Error saving file:', err);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    });
  });
};

fetch(process.argv);