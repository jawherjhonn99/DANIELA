const checkBtn = document.getElementById('checkBtn');
if (checkBtn) {
  checkBtn.addEventListener('click', () => {
    const input = document.getElementById('birthdayInput').value;
    const errorMsg = document.getElementById('errorMsg');
    const correctBirthday = '1989-10-04'; // 🎂 her real birthday

    if (input === correctBirthday) {
      errorMsg.classList.add('hidden');

      // 🌸 Add fade-out effect before going to main page
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = 'main.html';
      }, 800); // wait until fade-out finishes
    } else {
      errorMsg.classList.remove('hidden');
    }
  });
}
// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
  
    // Random position and size
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.width = 10 + Math.random() * 20 + 'px';
    heart.style.height = heart.style.width;
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
  
    document.querySelector('.hearts').appendChild(heart);
  
    // Remove heart after animation ends
    setTimeout(() => {
      heart.remove();
    }, 7000);
  }
  
  // Create a heart every 500ms
  setInterval(createHeart, 500);
  
