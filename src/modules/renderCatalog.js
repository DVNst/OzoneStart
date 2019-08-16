import filters from './filters';

export default function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card');
    const catalogList = document.querySelector('.catalog-list');
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWrapper = document.querySelector('.catalog');
    const categories = new Set();
    const filteTitle = document.querySelector('.filter-title h5');
  
    cards.forEach((card) => {
      categories.add(card.dataset.category);
    });
  
    categories.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item
      catalogList.appendChild(li);
    });
  
    const allLi = catalogList.querySelectorAll('li');
  
    catalogBtn.addEventListener('click', (event) => {
      if (catalogWrapper.style.display) {
        catalogWrapper.style.display = '';
      } else {
        catalogWrapper.style.display = 'block';
      }
  
      if (event.target.tagName === 'LI') {
        allLi.forEach((elem) => {
          if (elem == event.target) {
            elem.classList.add('active');
            elem.style.color = 'red';
          } else {
            elem.classList.remove('active');
            elem.style.color = '';
          }
        });
  
        filteTitle.textContent = event.target.textContent;
        filters();
      }
    });
  }