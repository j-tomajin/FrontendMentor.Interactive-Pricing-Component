// toggle
const toggle = document.querySelector('.toggle')
const slider = document.querySelector('.slider')
const tag = document.querySelector('.price-tag')

toggle.addEventListener('click', (e) => {
    e.preventDefault()
    slider.classList.toggle('slider-toggle')
    tag.classList.toggle('price-tag-toggle')
})


// slider
const progress = document.getElementById('progress')
const thumb = document.getElementById('thumb')
const bar = document.getElementById('bar')

const pageview = document.getElementById('pageview')
const price = document.getElementById('price')
const yearlyPrice = document.getElementById('yearly-price')

const discountPrice = 25

let priceOne = 8
let priceTwo = 12
let priceThree = 16
let priceFour = 24
let priceFive = 36

let priceOneY = discount(priceOne, discountPrice)
let priceTwoY = discount(priceTwo, discountPrice)
let priceThreeY = discount(priceThree, discountPrice)
let priceFourY = discount(priceFour, discountPrice)
let priceFiveY = discount(priceFive, discountPrice)




function discount(price, discount) {
    const yearly = price * 12
    const percentage = (discount / 100) * yearly
    

    return price = yearly - percentage 
}

progress.oninput = function() {
    thumb.style.left = this.value + '%'
    bar.style.width = this.value + '%'
    
    if(this.value >= 0 && this.value <= 20) {
        pageview.innerText = '10K'
        price.innerText = priceOne
        yearlyPrice.innerText = priceOneY
    } else if(this.value > 20 && this.value <= 40){
        pageview.innerText = '50K'
        price.innerText =  priceTwo
        yearlyPrice.innerText = priceTwoY
    } else if(this.value > 40 && this.value <= 60){
        pageview.innerText = '100K'
        price.innerText = priceThree
        yearlyPrice.innerText = priceThreeY
    } else if(this.value > 60 && this.value <= 80){
        pageview.innerText = '500k'
        price.innerText = priceFour
        yearlyPrice.innerText = priceFourY
    } else {
        pageview.innerText = '1M'
        price.innerText = priceFive
        yearlyPrice.innerText = priceFiveY
    }
}

/* 
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
*/

const attribution = document.querySelector('.attribution')

setInterval(() => {
    attribution.classList.add('attribution-toggle')
}, 3000)