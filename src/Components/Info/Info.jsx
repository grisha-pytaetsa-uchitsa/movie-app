import './Info.css';

function Info({ searchValue, ratedTab }) {
  let firstText;
  let secondText;
  if (ratedTab) {
    firstText = 'Оцененные фильмы';
    secondText = 'Список оцененных фильмов пуст';
  } else if (searchValue) {
    firstText = 'Попробуйте ещё раз';
    secondText = 'По вашему поисковому запросу ничего не найдено';
  } else if (!searchValue) {
    firstText = 'Начните поиск';
    secondText = 'Введите что-нибудь в строке поиска';
  }
  return (
    <div className="info">
      <h1>{firstText}</h1>
      <span>{secondText}</span>
      <img src="./img/search.svg" alt="search item" />
    </div>
  );
}

export default Info;
