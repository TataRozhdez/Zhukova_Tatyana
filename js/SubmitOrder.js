import {
  CHECK_ORDER_BTN,
  SUBMIT_MODAL_ELEM,
  SUBMIT_ORDER_BTN,
  INPUT_NAME,
  INPUT_EMAIL,
  TOTAL_SUM_ELEM,
  TOTAL_AMOUNT_ELEM
} from './constants.js'

const showModal = () => {
  const btnCloseModal = SUBMIT_MODAL_ELEM.querySelector('.modal-content_close')

  btnCloseModal.onclick = () => SUBMIT_MODAL_ELEM.style.display = 'none'

  SUBMIT_MODAL_ELEM.style.display = 'flex'
}

const submitOrder = () => {

  if (INPUT_NAME.value.trim() && INPUT_EMAIL.value.trim()) {
    TOTAL_SUM_ELEM.innerHTML = 'XXX'
    TOTAL_AMOUNT_ELEM.innerHTML = 'XXX'

    SUBMIT_MODAL_ELEM.style.display = 'none'

    alert('Благодарим за покупки! Приятного аппетита ♡')
  } else {
    alert('Пожалуйста, заполните все поля!')
  }
}

CHECK_ORDER_BTN.addEventListener('click', showModal)
SUBMIT_ORDER_BTN.addEventListener('click', submitOrder)