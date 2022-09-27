// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span')
  subtotal.innerText = parseInt(price) * quantity
}

function calculateAll() {
    // ITERATION 2
  const products = document.querySelectorAll('.product');
  for(i=0; i<products.length; i++){
    updateSubtotal(products[i])
  }
  // ITERATION 3
  let total = document.querySelectorAll('.subtotal span');
  let sum = 0;
  for(i=0; i<total.length;i++){
    sum += parseFloat(total[i].innerText);
  }
  document.querySelector('#total-value span').innerText = sum;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
}

// ITERATION 5

function createProduct() {
  let productName = document.querySelector('.create-product input').value;
  console.log(productName)
 // let productPrice = parseFloat(document.querySelector('.create-product input input').value);
  //console.log(productPrice)
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.querySelectorAll('.btn.btn-remove');
  for (let index = 0; index < removeBtn.length; index++) {
    removeBtn[index].addEventListener('click', removeProduct);
  }
  const createBtn = document.querySelector('.create-product');
  createBtn.addEventListener('click', createProduct)
  //... your code goes here
});
