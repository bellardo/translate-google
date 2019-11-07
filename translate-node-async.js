const https = require('https');

async function translate(translateTo, text, translateFrom = 'auto') {
  const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
    + translateFrom + "&tl=" + translateTo + "&dt=t&q=" + encodeURI(text);

  async function fetch(url) {
    return new Promise((resolve, reject) => {

      https.get(url, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;

        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          resolve(JSON.parse(data));

        });

      }).on("error", (err) => {
        reject({ error: err.message });

      });

    });

  }

  const alert = await fetch(url);
  return alert;

}

/*
translate('en', 'casa').then(alert => {
  console.log(alert);

});
*/

(async () => {
  try {
    let text = await translate('en', 'coche');
    console.log(text);

  } catch (e) {
    // Deal with the fact the chain failed
  }

})();
