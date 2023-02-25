const figmaInput = document.querySelector('#figma'),
  figmaEl = document.querySelector('#figma-el'),
  shrift = document.querySelector('#shrifts'),
  googleFont = document.querySelector('#google_font'),
  dropMenu = document.querySelector('.dropdown-menu'),
  elThemeToggler = document.querySelector('.site-header-theme-toogler');

// Figma links
const figmaLinks = () => [
  {link: 'https://www.figma.com/file/h2EzOBjvCiY8hVoFolSd5Z/AnsorMed-landing-page?node-id=1%3A2', name: 'AnsorMed'},
  {link: 'https://www.figma.com/file/3KecPBehQL49duLI0QBIiP/NAMANGANLIKLAR-24-(Copy)', name: 'Namanganliklar 24'},
  {link: 'https://www.figma.com/file/oqOJWgwVM3cULzmTyB9ogV/Apple-Watch?node-id=4%3A4', name: 'Apple Watch'},
  {link: 'https://www.figma.com/file/1QTZfPhAfdikBUQNR9rfeZ/Intro-component-with-sign-up-form-(Copy)?node-id=1%3A108', name: 'Intro form'},
  {link: 'https://www.figma.com/file/dXz3VDypeAWLRMj3sKEeRZ/Coffeeroasters-(Copy)?node-id=1%3A4622', name: 'CoffeeRoasters'},
  {link: 'https://www.figma.com/file/TjmtPnxg0aihyACNM49Uk3/rest-countries-api-with-color-theme-switcher?node-id=0%3A1', name: 'Countries'},
  {link: 'https://www.youtube.com/watch?v=E6kLaaQFctU', name: 'Кастомные чекбоксы правильно'},
  {link: 'https://www.youtube.com/watch?v=EbajTYI-gg8', name: 'Звёздный рейтинг ⭐️⭐️⭐️⭐️⭐️'},
  {link: 'https://www.youtube.com/watch?v=y_uHvWvWwy8', name: 'Kinoteatrga chipta olish maket - 1-qism'},
  {link: 'https://www.youtube.com/watch?v=zsBiW0_TlGE', name: 'Kinoteatrga chipta olish maket - 2-qism'},
  {link: 'https://youtube.com/playlist?list=PL3LQJkGQtzc56HquxrkwPdQt9Q1wHm21P', name: "CSSda transform, transition va position xususiyatlari bo'yicha qo'shimcha videodarslar (ko'rish shart!)"},
  {link: 'https://www.figma.com/file/NlZpfGCKKA7W6NfTELbvOC/job-listings-with-filtering?node-id=0%3A1', name: 'Job listing'},
]

// Generate Dropdown items
figmaLinks().forEach(item => {
  const li = document.createElement('li')
  li.innerHTML = `
    <a class="dropdown-item" href="${item.link}" target="_blank">${item.name}</a>
  `
  dropMenu.append(li);
})

figmaInput.addEventListener('input', () => {
  figmaEl.href = `${figmaInput.value}`
})

shrift.addEventListener('input', () => {
  googleFont.href = `https://fonts.google.com/?query=${shrift.value}`
})

// Dark Mode
elThemeToggler.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode')
})