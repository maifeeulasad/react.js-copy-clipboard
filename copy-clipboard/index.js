exports.copyText = function(copyText) {
    if(copyText===null || copyText===undefined || copyText==="")
        return;
    var tempInput = document.createElement('INPUT');
    document.body.appendChild(tempInput);
    tempInput.setAttribute('value', copyText);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert("Text copied in clipboard");
}