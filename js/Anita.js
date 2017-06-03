// the function which handles the input field logic
function getUserName() {
    var eMail = document.getElementById('email').value;
    var result = alert(result);

    if (eMail.length < 3) {
        result.textContent = 'e-mail must contain at least 3 characters';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent =eMail + " has been successfully added to our e-mail list. Thank you."
        //alert(nameField);
    }
}
// use an eventlistener for the event
var button= document.getElementById('button');
button.addEventListener('click', getUserName, false);
