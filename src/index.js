// INPUTS

const dayIn = document.getElementById('dayInput')
const monthIn = document.getElementById('monthInput')
const yearIn = document.getElementById('yearInput')

// OUTPUS

const dayOut = document.getElementById('dayOutput')
const monthOut = document.getElementById('monthOutput')
const yearOut = document.getElementById('yearOutput')

const btnForm = document.getElementById('button')

btnForm.addEventListener('click', calculateAge)

// Date Now
const fecha = new Date()
let yearNow = fecha.getFullYear()
let monthNow = 1 + fecha.getMonth()
let dayNow = fecha.getDate()

const dayPerMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//input validation
function validate() {
  const inputs = document.querySelectorAll('input')
  let validator = true
  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add('input-container--invalid')
      input.parentElement.querySelector('.input-alert-empty').innerText =
        'This fiel is required'
      validator = false
    } else if (monthIn.value > 12) {
      input.parentElement.classList.add('input-container--invalid')
      input.parentElement.querySelector('.input-alert-empty').innerText =
        'Must be a valid month'
      validator = false
    } else if (dayIn.value > 31) {
      input.parentElement.classList.add('input-container--invalid')
      input.parentElement.querySelector('.input-alert-empty').innerText =
        'Must be a valid day'
      validator = false
    } else if (yearIn.value > yearNow) {
      input.parentElement.classList.add('input-container--invalid')
      input.parentElement.querySelector('.input-alert-empty').innerText =
        'Must be in the past'
      validator = false
    } else {
      input.parentElement.classList.remove('input-container--invalid')
      input.parentElement.querySelector('.input-alert-empty').innerHTML = ''
      validator = true
    }
  })
  return validator
}

//calculate age
function calculateAge(e) {
  e.preventDefault()
  if (validate()) {
    if (dayIn.value > dayNow) {
      dayNow = dayNow + dayPerMonths[monthNow - 1]
      monthNow = monthNow - 1
    }
    if (monthIn.value > monthNow) {
      monthNow = monthNow + 12
      yearNow = yearNow - 1
    }
    const days = dayNow - dayIn.value
    const months = monthNow - monthIn.value
    const years = yearNow - yearIn.value
    dayOut.innerHTML = days
    monthOut.innerHTML = months
    yearOut.innerHTML = years
  }
}
