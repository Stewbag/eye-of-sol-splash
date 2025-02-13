// Countdown Timer
const targetDate = new Date('2024-12-31T23:59:59').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.cyber-countdown').innerHTML = '<h2>We\'re Live!</h2>';
  }
}

// Initial call to avoid delay
updateCountdown();

// Update every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Email Form Handling
document.querySelector('.cyber-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input').value;
  
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Thank you for subscribing! We\'ll keep you updated.');
    this.reset();
  } else {
    alert('Please enter a valid email address.');
  }
});