async function translate(translateTo, text, translateFrom = 'auto') {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
        + translateFrom + "&tl=" + translateTo + "&dt=t&q=" + encodeURI(text);

    const response = await fetch(url);
    const data = await response.json();

    return data[0][0][0];
}

translate('en', 'hola').then(alert)
