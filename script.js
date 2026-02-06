 // Image slider for Home page
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.slider img');
            let currentIndex = 0;

            function showNextImage() {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }

            if (images.length > 0) {
                images[0].classList.add('active');
                setInterval(showNextImage, 3000); // Change image every 3 seconds
            }

            // Form validation for Feedback page
            const form = document.getElementById('feedbackForm');
            if (form) {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const name = document.getElementById('name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const message = document.getElementById('message').value.trim();

                    if (!name || !email || !message) {
                        alert('Please fill in all fields.');
                        return;
                    }

                    if (!/\S+@\S+\.\S+/.test(email)) {
                        alert('Please enter a valid email.');
                        return;
                    }

                    alert('Thank you for your feedback!');
                    form.reset();
                });
            }
        });