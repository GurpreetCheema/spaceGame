

var cardsArray = [{
  'name': 'star1',
      'img': 'img/1.png',
    },
    {
      'name': 'star2',
      'img': 'img/2.png',
    },
    {
      'name': 'star3',
      'img': 'img/3.png',
    },
    {
      'name': 'star4',
      'img': 'img/4.png',
    },
    {
      'name': 'star5',
      'img': 'img/5.png',
    },
    {
      'name': 'star6',
      'img': 'img/6.png',
    },
    {
      'name': 'star7',
      'img': 'img/7.png',
    },
    {
      'name': 'star8',
      'img': 'img/8.png',
    },

    {
      'name': 'star9',
      'img': 'img/9.png',
    },
    {
      'name': 'star10',
      'img': 'img/10.png',
    },
    {
      'name': 'star11',
      'img': 'img/11.png',
    },
    {
      'name': 'star12',
      'img': 'img/12.png',
    },
  ];
var gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

var firstGuess = '';
var secondGuess = '';
var count = 0;
var previousTarget = null;
var delay = 1200;

var game = document.getElementById('game');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(function (item) {
  var name = item.name,
      img = item.img;


  var card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  var front = document.createElement('div');
  front.classList.add('front');

  var back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

var match = function match() {
  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.add('match');
  });
};

var resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(function (card) {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {

  var clicked = event.target;

  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match') || clicked.parentNode.dataset.name === undefined) {
    console.log("Empty clicks")
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});
