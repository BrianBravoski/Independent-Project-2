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

function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-100324057-1', 'auto');
  ga('send', 'pageview');
