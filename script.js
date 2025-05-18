function scrollToContact() {
  document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}

function downloadCV() {
  const link = document.createElement('a');
  link.href = '/assets/balaji_krishnan_cv.pdf'; // Replace with your actual file path
  link.download = 'Balaji_Krishnan_CV.pdf';
  link.click();
}

function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('New Contact Form Message');
  const body = encodeURIComponent(`Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\n\nMessage:\n${message}`);

  window.location.href = `mailto:balajibe1994@gmail.com?subject=${subject}&body=${body}`;
  return false;
}