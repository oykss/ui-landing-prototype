const items = {
  item1: {
    type: 'new',
    price: 6899,
    img: 'img-1-@1x.jpg',
    imgLarge: 'img-1-@2x.jpg',
    category: 'Новинки',
  },
  item2: {
    type: 'action',
    price: 7520,
    img: 'img-1-@1x.jpg',
    imgLarge: 'img-1-@2x.jpg',
    category: 'Акції',
  },
  item3: {
    type: 'popular',
    price: 5190,
    img: 'img-1-@1x.jpg',
    imgLarge: 'img-1-@2x.jpg',
    category: 'Популярні',
  },
  item4: {
    type: 'new',
    price: 6100,
    img: 'img-2-@1x.jpg',
    imgLarge: 'img-2-@2x.jpg',
    category: 'Новинки',
  },
  item5: {
    type: 'action',
    price: 8450,
    img: 'img-2-@1x.jpg',
    imgLarge: 'img-2-@2x.jpg',
    category: 'Акції',
  },
  item6: {
    type: 'popular',
    price: 5749,
    img: 'img-2-@1x.jpg',
    imgLarge: 'img-2-@2x.jpg',
    category: 'Популярні',
  },
  item7: {
    type: 'new',
    price: 9025,
    img: 'img-3-@1x.jpg',
    imgLarge: 'img-3-@2x.jpg',
    category: 'Новинки',
  },
  item8: {
    type: 'action',
    price: 6230,
    img: 'img-3-@1x.jpg',
    imgLarge: 'img-3-@2x.jpg',
    category: 'Акції',
  },
  item9: {
    type: 'popular',
    price: 7590,
    img: 'img-3-@1x.jpg',
    imgLarge: 'img-3-@2x.jpg',
    category: 'Популярні',
  },
  item10: {
    type: 'new',
    price: 5030,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Новинки',
  },
  item11: {
    type: 'action',
    price: 8199,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Акції',
  },
  item12: {
    type: 'popular',
    price: 9380,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Популярні',
  },
  item13: {
    type: 'popular',
    price: 5310,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Популярні',
  },
  item14: {
    type: 'popular',
    price: 7777,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Популярні',
  },
  item15: {
    type: 'new',
    price: 9997,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Новинки',
  },
  item16: {
    type: 'new',
    price: 5630,
    img: 'img@1x.jpg',
    imgLarge: 'img@2x.jpg',
    category: 'Новинки',
  },
};

const basePath = import.meta.env.BASE_URL || '';

const buttonList = document.querySelector('#range .button-list');
const contentListWrap = document.querySelector('#range .content-list');
const btnMore = document.querySelector('#range .btn-more');

let contentListItem = [];
let isExpanded = false;

generationContentList('new');
addElements(3);
buttonList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  contentListWrap.innerHTML = '';
  contentListItem = [];
  btnMore.textContent = 'Смотреть все';
  isExpanded = false;

  generationContentList(event.target.id);
  addElements(3);
});

btnMore.addEventListener('click', event => {
  event.preventDefault();

  if (isExpanded) {
    document.getElementById('range').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    btnMore.textContent = 'Смотреть все';
    addElements(3);
    isExpanded = false;
  } else {
    btnMore.textContent = 'Закрыть';
    addElements();
    isExpanded = true;
  }
});

function generationContentList(type) {
  addActive(type);

  for (const key in items) {
    if (items[key].type === type) {
      contentListItem.push(
        `<li class="content-item">
          <a href="#">
            <img
              srcset="${basePath}range/${items[key].img} 1x, 
              ${basePath}range/${items[key].imgLarge} 2x" 
              src="${basePath}range/${items[key].img}" alt="Product picture" 
              width="310"
              height="165"
              />
              <div class="desc-wrap">
                <p class="desc">${items[key].category.toUpperCase()}</p>
                <h3 class="subtitle">Вже давно відомо, що читабельний зміст буде заважати зосередит...</h3>
                <p class="desc-price">От ${items[key].price}</p>
              </div>
          </a>
        </li>`
      );
    }
  }
}

function addElements(num) {
  contentListWrap.innerHTML = contentListItem.slice(0, num).join('');
  const items = contentListWrap.querySelectorAll('.content-item');
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('show');
    }, index * 200);
  });
}

function addActive(type) {
  buttonList.querySelectorAll('.btn-chois').forEach(btn => {
    if (btn.id === type) {
      btn.classList.remove('btn-chois-unactive');
      btn.classList.add('btn-chois-active');
      return;
    }
    btn.classList.add('btn-chois-unactive');
  });
}
