// Projects page functionality

function toggleProjectDetails(projectId) {
  const detailsElement = document.getElementById(projectId);
  const button = event.target;

  if (detailsElement.style.display === 'none') {
    detailsElement.style.display = 'block';
    button.textContent = 'Skjul detaljer';
  } else {
    detailsElement.style.display = 'none';
    button.textContent = 'Se detaljer';
  }
}

// Update button text based on language
document.addEventListener('DOMContentLoaded', () => {
  // You can add any initialization code here
  console.log('Projects page loaded');
});
