import { CATEGORY_SEL_ELEM, PRICE_SEL_ELEM } from './constants.js'
/**
 * Select options ID (#ID: data):
 *
 * #0:  all       | #0: all
 * #1: dinners    | #1: >30
 * #2: first meal | #2: >50
 * #3: garnish    | #3: >100
 *                
 */

const filter = () => {
  const numberSelCategory = +CATEGORY_SEL_ELEM.value
  const numberSelPrice = +PRICE_SEL_ELEM.value

  const allCardElem = document.querySelectorAll('[data-category]')

  Array.from(allCardElem).map(card => {
    const priceCard = +card.querySelector('[data-price]').dataset.price

    if (numberSelCategory) {
      // if selected category => check category, then check of this card 

      (+card.dataset.category !== numberSelCategory)
        ? card.style.display = 'none'
        : (numberSelPrice === 0)
          ? card.style.display = 'flex'
          : (!!numberSelPrice && (numberSelPrice < priceCard)) 
            ? card.style.display = 'none'
            : card.style.display = 'flex'

      
    } else if (numberSelPrice) {
      // if all category & selected price

      (priceCard > numberSelPrice)
        ? card.style.display = 'none'
        : card.style.display = 'flex'
    } else {
      // if all category & all price

      card.style.display = 'flex'
    }    
  })
}

CATEGORY_SEL_ELEM.addEventListener('change', filter)
PRICE_SEL_ELEM.addEventListener('change', filter)
