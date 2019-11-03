exports.copyText = function(textT) {
    if(textT===null || textT===undefined || textT==="")
        return;
    var tempInput = document.createElement('INPUT');
    document.body.appendChild(tempInput);
    tempInput.setAttribute('value', textT);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Text copied in clipboard");
}