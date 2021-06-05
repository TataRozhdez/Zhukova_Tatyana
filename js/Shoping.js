import { PRODUCT_ADD_BTN, TOTAL_AMOUNT_ELEM, TOTAL_SUM_ELEM } from './constants.js';

const summing = (a, b) => {
  return (a === 'XXX') ? `${b}` : `${+a + +b}`
}

const addToBasket = (e) => {
  const productMeta = e.path.find(i => i.classList.contains('product-box__meta'))
  const inputAmount = productMeta.querySelector('.qty__item').value

  const price = productMeta.querySelector('[data-price]').dataset.price
  const amount = +inputAmount || 1
  console.log('amout', amount);
  
  if (!inputAmount) productMeta.querySelector('.qty__item').value = 1
  
  const totalAmount = summing(TOTAL_AMOUNT_ELEM.innerHTML, amount)
  const totalSum = summing(TOTAL_SUM_ELEM.innerHTML, price)

  TOTAL_AMOUNT_ELEM.innerHTML =  totalAmount
  TOTAL_SUM_ELEM.innerHTML = totalSum
}

Array.from(PRODUCT_ADD_BTN, (btn => btn.addEventListener('click', addToBasket)))


