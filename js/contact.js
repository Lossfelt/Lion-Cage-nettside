// Contact form handling

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Hide previous messages
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';

      // Get form data
      const formData = new FormData(form);

      try {
        // Submit to Formspree
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Show success message
          successMessage.style.display = 'block';
          form.style.display = 'none';

          // Optional: Reset form after a delay
          setTimeout(() => {
            form.reset();
          }, 1000);
        } else {
          // Show error message
          errorMessage.style.display = 'block';
        }
      } catch (error) {
        console.error('Form submission error:', error);
        errorMessage.style.display = 'block';
      }
    });
  }
});
