// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: false,
  speed: 600,
  spaceBetween: 100,
  slidesPerView: 1,
});

function switchTab(slideIndex, element) {
  swiper.slideTo(slideIndex);

  document.querySelectorAll('.tablinks').forEach((tab) => {
    tab.classList.remove('active');
  });

  element.classList.add('active');
}

function toggleMobileNavbar() {
  const navbar = document.querySelector('.mobile-navbar');
  navbar.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("LeaveManagement").style.display = "block";
});

document.querySelector('.toggle-btn').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('collapsed');
});

document.getElementById('notification-icon').addEventListener('click', function() {
  const panel = document.getElementById('notification-panel');
  panel.classList.toggle('hidden');
});

document.getElementById('mark-as-read').addEventListener('click', function() {
  alert('All notifications marked as read!');
});
