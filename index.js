/**
  * Creates a temporary input element in the DOM.
  * This can be used for various purposes, such as copying text to the clipboard.
  * 
  * @type {HTMLInputElement} The temporary input element created.
  */
exports.copyText = function (text_to_copy, alert_or_not) {
    if (text_to_copy === null || text_to_copy === undefined || text_to_copy === "")
        return;
    if (typeof alert_or_not == undefined)
        alert_or_not = false;
    var tempInput = document.createElement('INPUT');
    document.body.appendChild(tempInput);
    tempInput.setAttribute('value', text_to_copy);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    if (alert_or_not)
        alert("Text copied in clipboard:\n" + text_to_copy.length > 30 ? text_to_copy.substring(0, 30) : text_to_copy);
}