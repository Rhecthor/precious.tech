document.getElementById('orderForm').addEventListener('submit', function(event) {
    

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}! Your order for a ${service} on ${date} at ${time} has been received. We will send a confirmation to ${email}. Kindly check your email in the next 24hrs ${email}.`;

    document.getElementById('confirmation').textContent = confirmationMessage;

    // Call the order success function
    orderSuccess();

     const formElements = orderForm.elements;

     // Function to clear all form fields 
     function clearFormFields() {
      for (let i = 0; i < formElements.length; i++) {
        const elements = formElements[i];
        if (element.tagName === 'INPUT' ||
          element.tagName === 'TEXTAREA') {
            element.value = '';
          }
      }
     }

    // Clear the form
         orderForm.addEventListener('submit', function (event) {

          setTimeout(function () {
            clearFormFields();
          
         }, 100);

         return true;
                });
}); 

function orderSuccess() {
    alert('Order successful!');
}





// Show selected section and hide others
function showSection(sectionId) {
  sections.forEach(section => {
    if (section.id === sectionId) {
      section.classList.remove("hidden");
    } else {
      section.classList.add("hidden");
    }
  });
}


// Fun Facts Counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  counters.forEach(counter => {
      let updateCount = () => {
          let target = +counter.getAttribute("data-count");
          let count = +counter.innerText;
          let speed = target / 200;

          if (count < target) {
              counter.innerText = Math.ceil(count + speed);
              setTimeout(updateCount, 20);
          } else {
              counter.innerText = target;
          }
      };
      updateCount();
  });
});

// Chatbot
document.querySelector(".chat-btn").addEventListener("click", function () {
  alert("Chatbot coming soon!");
});
