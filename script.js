document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function validateForm() {
    const emailField = document.getElementById('email');
    const emailValue = emailField.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(emailValue)) {
        alert('Kérjük, adjon meg egy érvényes e-mail címet!');
        return false;
    }

    return true;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


window.addEventListener('scroll', function() {
    document.querySelectorAll('.fade-in').forEach(function(element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        }
    });
});

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    console.log(user);
   
    console.log(`${user.name.first} ${user.name.last}`);
  })
  .catch(error => console.error('Error:', error));


fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
  const user = data.results[0];

 
  document.getElementById('username').textContent = `${user.name.first} ${user.name.last} - Energetikai mérnök (gólya)`;

 
  const emailElement = document.getElementById('useremail');
  emailElement.textContent = user.email;
  emailElement.href = `mailto:${user.email}`;


  document.getElementById('userimage').src = user.picture.large;
})
.catch(error => console.error('Error:', error));

