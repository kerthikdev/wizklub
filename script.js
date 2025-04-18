// Handle Contact Form Submission (basic example with form validation and success message)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission behavior

    // Get values from form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this further if needed)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate a successful form submission
    alert('Thank you for reaching out! We will get back to you soon.');

    // Optionally, reset the form after successful submission
    document.getElementById('contact-form').reset();
});

// Smooth scrolling when clicking nav links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
