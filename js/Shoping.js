import { PRODUCT_ADD_BTN, TOTAL_AMOUNT_ELEM, TOTAL_SUM_ELEM } from './constants.js';

const summing = (a, b) => {
  return (a === 'XXX' || !a) ? `${b}` : `${+a + +b}`
}

const addToBasket = (e) => {
  const productMeta = e.path.find(i => i.classList.contains('product-box__meta'))
  const inputAmount = productMeta.querySelector('.qty__item')

  const price = productMeta.querySelector('[data-price]').dataset.price
  const amount = +inputAmount.value || 1
    
  const totalAmount = summing(TOTAL_AMOUNT_ELEM.innerHTML, amount)
  const priceElements = amount * price
  const totalSum = summing(TOTAL_SUM_ELEM.innerHTML, priceElements) 
  
  if (!inputAmount.value) inputAmount.value = 1
  
  TOTAL_SUM_ELEM.innerHTML = totalSum
  TOTAL_AMOUNT_ELEM.innerHTML =  totalAmount 
}

Array.from(PRODUCT_ADD_BTN, (btn => btn.addEventListener('click', addToBasket)))


