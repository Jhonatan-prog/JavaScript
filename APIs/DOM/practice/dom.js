/* const $firstLink = document.querySelector('.link-section')
$firstLink.setAttribute("target", "_blank")
$firstLink.hasAttribute("target")
$firstLink.removeAttribute("target")
console.log($firstLink.hasAttribute("target")) */

/* const $firstLink = document.querySelector('section')

const $html = document.documentElement
const $body = document.body

let darkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")   */

/* const $cards = document.querySelector('.cards'), 
 $newCard = document.createElement('figure'),
 $cardsClone = $cards.cloneNode(true)

$newCard.innerHTML = `
    <img src="http://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`
$newCard.classList.add('card')

$cards.removeChild($cards.firstChild)
console.log($cardsClone) */

window.addEventListener("DOMContentLoaded", e => {
    console.log(window.screenY)
    console.log(window.screenX)
})