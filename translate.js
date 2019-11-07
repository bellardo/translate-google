function translate(translateTo, text, translateFrom = 'auto') {
    return new Promise((resolve, reject) => {
        const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
            + translateFrom + "&tl=" + translateTo + "&dt=t&q=" + encodeURI(text);

        fetch(url).then(response => {
            response.json().then(data => {
                resolve(data[0][0][0])
            }, reject)
        }, reject)
    });
}

translate('en', 'hola').then(alert)
