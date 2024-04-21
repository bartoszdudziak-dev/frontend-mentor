const dashboard = document.querySelector('.dashboard');
const timeFrames = document.querySelector('.user__stats');
const timeFramesBtn = document.querySelectorAll('.btn');

const loadData = async function () {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const renderData = function (timeframe) {
  data.forEach((el, i) => {
    const markup = `
    <article class="card card--${el.title.toLowerCase().replace(' ', '')}">
      <div class="card__content">
        <div class="card__header flex">
          <h2 class="card__category">${el.title}</h2>
          <button class="card__more">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div class="card__info flex">
          ${generateTimeFrameMarkup(timeframe, i)}
        </div>
      </div>
    </article>
  `;
    dashboard.insertAdjacentHTML('beforeend', markup);
  });
};

const generateTimeFrameMarkup = function (timeframe, i) {
  if (timeframe == 'daily') {
    return `
      <p class="card__current">${data[i].timeframes.daily.current}hrs</p>
      <p class="card__previous">Yesterday - ${data[i].timeframes.daily.previous}hrs</p>
    `;
  }

  if (timeframe == 'weekly') {
    return `
      <p class="card__current">${data[i].timeframes.weekly.current}hrs</p>
      <p class="card__previous">Last Week - ${data[i].timeframes.weekly.previous}hrs</p>
    `;
  }

  if (timeframe == 'monthly') {
    return `
      <p class="card__current">${data[i].timeframes.monthly.current}hrs</p>
      <p class="card__previous">Last Month - ${data[i].timeframes.monthly.previous}hrs</p>
    `;
  }
};

const clickEvent = function () {
  timeFrames.addEventListener('click', function (e) {
    const active = e.target;
    if (!active.classList.contains('btn')) return;

    timeFramesBtn.forEach(btn => btn.classList.remove('btn--active'));
    active.classList.add('btn--active');

    cardInfo.forEach((card, i) => {
      card.innerHTML = generateTimeFrameMarkup(active.dataset.timeframe, i);
    });
  });
};

const data = await loadData();
renderData('weekly');
const cardInfo = document.querySelectorAll('.card__info');
clickEvent();
