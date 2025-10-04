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
