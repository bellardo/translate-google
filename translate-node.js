const https = require('https');

function translate(translateTo, text, translateFrom = 'auto') {
  return new Promise((resolve, reject) => {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
      + translateFrom + "&tl=" + translateTo + "&dt=t&q=" + encodeURI(text);


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
      reject({error: err.message});
    
    });

  });
}

translate('en', 'casa', 'es').then(alert => {
  console.log(alert);

});

/**
 * Amb auto retorna
 [ [ [ 'House', 'casa', null, null, 1 ] ],
  null,
  'es',
  null,
  null,
  null,
  0.27272728,
  null,
  [ [ 'es' ], null, [ 0.27272728 ], [ 'es' ] ] ]

  Si epecifiquem l'idioma del source

[ [ [ 'House', 'casa', null, null, 1 ] ], null, 'es' ] 
 */
