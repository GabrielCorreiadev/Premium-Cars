import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animação do hero
gsap.to('.hero-content', {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5
});

// Animação dos cards de carros
gsap.utils.toArray('.car-card').forEach((card, i) => {
  gsap.to(card, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2 * i,
    scrollTrigger: {
      trigger: card,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
});


// Animação das features
gsap.utils.toArray('.feature').forEach((feature, i) => {
  gsap.from(feature, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: 0.2 * i,
    scrollTrigger: {
      trigger: feature,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
});

// Animação dos serviços
gsap.utils.toArray('.service-card').forEach((service, i) => {
  gsap.from(service, {
    opacity: 0,
    y: 50,
    duration: 0.6,
    delay: 0.2 * i,
    scrollTrigger: {
      trigger: service,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
});

// Animação do formulário de contato
gsap.to('#contact-form', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: '#contact-form',
    start: 'top bottom-=100',
    toggleActions: 'play none none reverse'
  }
});

// Animações de hover nos botões
const buttons = document.querySelectorAll('.buy-button, .test-drive-button');
buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    gsap.to(button, {
      scale: 1.05,
      duration: 0.3
    });
  });
  
  button.addEventListener('mouseleave', () => {
    gsap.to(button, {
      scale: 1,
      duration: 0.3
    });
  });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  function scrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Ajuste do espaço para o topo
        behavior: 'smooth' // Rolagem suave
      });
    }
  }

  // Selecionando todos os botões com as classes .buy-button e .test-drive-button
  const buyButtons = document.querySelectorAll('.buy-button');
  const testDriveButtons = document.querySelectorAll('.test-drive-button');

  // Adicionando eventos de clique a todos os botões "Saiba Mais"
  buyButtons.forEach(button => {
    button.addEventListener('click', function() {
      scrollToSection('#contact'); // Rola até a seção Contact
    });
  });

  // Adicionando eventos de clique a todos os botões "Agendar Test Drive"
  testDriveButtons.forEach(button => {
    button.addEventListener('click', function() {
      scrollToSection('#contact'); // Rola até a seção Contact
    });
  });
});


// Form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  e.target.reset();
});

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Inscrição realizada com sucesso!');
  e.target.reset();
});

// Animação dos badges
gsap.utils.toArray('.car-badge').forEach(badge => {
  gsap.from(badge, {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: badge,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Back to Top Animation
gsap.to(backToTop, {
  y: -10,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});