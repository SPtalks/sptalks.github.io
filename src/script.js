const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});

const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach(card => {

    const question =
        card.querySelector('.faq-question');

    question.addEventListener('click', () => {

        card.classList.toggle('active');

    });

});