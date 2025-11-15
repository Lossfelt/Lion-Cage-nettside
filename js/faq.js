// FAQ page functionality

function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector('.faq-answer');
  const isActive = button.classList.contains('active');

  // Close all other FAQ items (optional - remove if you want multiple items open)
  document.querySelectorAll('.faq-question').forEach(q => {
    if (q !== button) {
      q.classList.remove('active');
      q.parentElement.querySelector('.faq-answer').classList.remove('active');
    }
  });

  // Toggle current item
  if (isActive) {
    button.classList.remove('active');
    answer.classList.remove('active');
  } else {
    button.classList.add('active');
    answer.classList.add('active');
  }
}

// Optional: Allow clicking anywhere on the FAQ item to toggle
document.addEventListener('DOMContentLoaded', () => {
  console.log('FAQ page loaded');
});
