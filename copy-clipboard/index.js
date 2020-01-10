exports.copyText = function(text_to_copy,alert_or_not) {
    if(text_to_copy===null || text_to_copy===undefined || text_to_copy==="")
        return;
    var tempInput = document.createElement('INPUT');
    document.body.appendChild(tempInput);
    tempInput.setAttribute('value', text_to_copy);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    if(alert_or_not)
	    alert("Text copied in clipboard:\n"+len(text_to_copy)>30 ?text_to_copy.substring(0,30) : text_to_copy);
}