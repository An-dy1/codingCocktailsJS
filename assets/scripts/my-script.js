const submitOrder = (name, drink) => {
  alert(name + " is thirsty for a " + drink);
};

// document.getElementById('order-btn').addEventListener('click', () => {
//       submitOrder(document.getElementById('order-form-input').value);
// });

document.getElementById('order-btn').addEventListener('click', () => {
  var name = document.getElementById('order-form-input').value;
  var drink = document.querySelector('input[type="radio"]:checked').value;
  submitOrder(name, drink);
});
