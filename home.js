document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const confirmationMessage = `Thank you, ${name}! Your message on our product has been received. We will send a confirmation to ${email}. Kindly check your email in the next 24hrs ${email}.`;

    document.getElementById('confirmation').textContent = confirmationMessage;

    // Call the order success function
    orderSuccess();

    // Clear the form
    document.getElementById('orderForm').reset();
});

function orderSuccess() {
    alert('Message Sent!');
}
