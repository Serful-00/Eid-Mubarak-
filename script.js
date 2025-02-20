
// Redirect to second page with user's name
document.getElementById('nameForm')?.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const name = document.getElementById('name').value.trim();
  if (name) {
    localStorage.setItem('userName', name); // Save name in localStorage
    window.location.href = 'eid-wishes.html'; // Redirect to second page
  } else {
    alert('অনুগ্রহ করে আপনার নাম লিখুন!');
  }
});

// Display user's name on the second page
document.addEventListener('DOMContentLoaded', function () {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.getElementById('userName')?.textContent = `হ্যালো, ${userName}!`;
  }

  // Social media sharing links
  document.getElementById('whatsapp')?.addEventListener('click', function (e) {
    e.preventDefault();
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  });

  document.getElementById('facebook')?.addEventListener('click', function (e) {
    e.preventDefault();
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  });

  document.getElementById('instagram')?.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Instagram এ শেয়ার করতে পৃষ্ঠাটি স্ক্রিনশট করুন!');
  });
});
