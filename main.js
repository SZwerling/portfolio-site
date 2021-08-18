/* Sending Email from Contact Section */
// (function () {
//     emailjs.init("user_zKkE3M0rBY7aJ5r2KWT8V");
// })();

// function sendmail() {
//     let fullName = document.getElementById("name").value;
//     let userEmail = document.getElementById("email").value;
//     let userMessage = document.getElementById("message").value;

//         var contactParams = {
//             from_name: fullName,
//             from_email: userEmail,
//             message: userMessage
//         };

//         emailjs.send('service_e0jgnbl', 'template_enjox8o', contactParams).then(function (res) {})
// }

(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_zKkE3M0rBY7aJ5r2KWT8V");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_e0jgnbl', 'template_enjox8o', this)
            .then(function() {
                console.log('SUCCESS!')
                location.reload()
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


//"user_zKkE3M0rBY7aJ5r2KWT8V"
//'service_e0jgnbl', 'template_enjox8o'
