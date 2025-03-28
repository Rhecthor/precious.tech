document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}! Your order for a ${service} on ${date} at ${time} has been received. We will send a confirmation to ${email}. Kindly check your email in the next 24hrs ${email}.`;

    document.getElementById('confirmation').textContent = confirmationMessage;

    // Call the order success function
    orderSuccess();

    // Clear the form
    document.getElementById('orderForm').reset();
});

function orderSuccess() {
    alert('Order successful!');
}

const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sections = document.querySelectorAll(".content-section");

// Open sidebar
openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

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
