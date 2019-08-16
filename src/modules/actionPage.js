import filters from './filters';

export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');
  
    discountCheckbox.addEventListener('click', filters);
    min.addEventListener('change', filters);
    max.addEventListener('change', filters);
  
      //---begin filter search
    searchBtn.addEventListener('click', () => {
      const searchText = new RegExp(search.value.trim(), 'i');
  
      cards.forEach((card) => {
        const title = card.querySelector('.card-title');
  
        if (!searchText.test(title.textContent)) {
          card.parentNode.style.display = 'none';
        } else {
          card.parentNode.style.display = '';
        }
      });
    });
    //---end filter search
  }