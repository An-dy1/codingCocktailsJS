const cocktailsArray = [{
         'id': 'focusedLady',
         'label': 'Focused Lady'
     },
     {
         'id': 'strongLady',
         'label': 'Strong Lady'
     },
     {
         'id': 'frontEndPunch',
         'label': 'Front-End Punch'
     },
     {
         'id': 'cachedOut',
         'label': 'Cached Out'
     },
     {
         'id': 'httPapaya',
         'label': 'httPAPAYA://'
     },
     {
         'id': 'nerdyDaiquiri',
         'label': 'Nerdy Daiquiri'
     },
     {
         'id': 'theAvernaCode',
         'label': 'The Averna Code'
     },
     {
         'id': 'focusedTheMostest',
         'label': 'Focused the Mostest'
     },
 ];

// why am I not calling this a function??
 const buildCocktailsMenu = (cocktails) => {
   let cocktailsString = '';

   cocktails.forEach((cocktail) => {
     cocktailsString += `<label class="radio" for="${cocktail.id}"><input type="radio" id="${cocktail.id}" name="drink" value="${cocktail.label}">${cocktail.label}</label>`;
    })

   document.querySelector('.radio-group').innerHTML = cocktailsString;
 };

const submitOrder = (name, drink) => {
  let newNode = document.createElement('h3');
  const newText = document.createTextNode(`${name} would like a ${drink}`);
  newNode.appendChild(newText);
  document.querySelector('.order-details').appendChild(newNode);
};

document.addEventListener("DOMContentLoaded", (event) => {

  buildCocktailsMenu(cocktailsArray);

  document.getElementById('order-btn').addEventListener('click', () => {
    var name = document.getElementById('order-form-input').value;
    var drink = document.querySelector('input[type="radio"]:checked').value;
    submitOrder(name, drink);
  });
});
