
### new Elements

```javascript
const $ul = document.querySelector('ul');
const li = document.createElement('li');
li.setAttribute('id', 'list-items'); // set Attribute
console.log(li.getAttribute('id')); // output -> list-items
li.removeAttribute('id'); // remove Attribute

li.classList.add('new-class');

li.classList.replace('new-class', 'new-class2');

li.classList.contains('new-class'); // false

li.innerText = "Spider-man";

$ul.append(li)

li.remove()
// text
// console.log(li.innerText)
// console.log(li.textContent -> (only text))
// console.log(li.innerHTML -> (only html code/it replaces the reference))
// console.log(li.outerHTML -> (it does not replace the reference))
```

### Set attributes

```javascript
const $firstLink = document.querySelector('.link-section')

$firstLink.setAttribute("target", "_blank")
$firstLink.setAttribute("href", "url")
$firstLink.hasAttribute("target")
$firstLink.removeAttribute("target")

console.log($firstLink.hasAttribute("target")) // false
```

### Transversing DOM

```javascript
// Upwards the DOM
let ul = document.querySelector('ul');
console.log(ul.parentElement.parentElement) // same but with .parentNode

let html = document.documentElement
console.log(html.parentNode)

// Downwards the DOM
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.color = 'blue';

// sibling node transversal (are sibling 'cause they are in the same level)
console.log(ul.nextElementSibling) // nextSibling
console.log(ul.previousElementSibling) // previousSibling
```

### Event listeners

```javascript
// Onclcik
const btn = document.querySelector('.btn-3');

btn.addEventListener('click', () => {
    console.log("you clicked the button");
})

// mouseOver
const changeBgc = document.querySelector('.btn-3');

changeBgc.addEventListener("mouseover",() => {
    changeBgc.parentElement.style.backgroundColor = "gray";
})
```

### Event Propagation
1. Event capturing ->
2. Target *
3. Event Bubbling <-

```javascript
window.addEventListener('click', () => {
    console.log("Window")
}, false)

document.addEventListener('click', () => {
    console.log("Document")
}, false)

document.querySelector('.div2').addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("Div2")
}, false) // you can also use {once: true}

document.querySelector('.div1').addEventListener('click', () => {
    console.log("Div1")
}, false)

document.querySelector('.btn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.innerText = 'clicked!'); // e = event object
}, false)
```

### Event Delegation
it allows us to use one eventListener to the 
parent for all de possibles descendants.

```javascript
document.getElementById('sports').addEventListener('click', (e) => {
    console.log(e.target.getAttribute('id') + ' ' + "clicked")
    const target = e.target;
    
    if(target.matches('li')) {
        target.style.color = 'red';
    }
})
```


### styling elements

```javascript
const listItems = document.querySelectorAll('.list-items');

for (let li of listItems) {
    li.style.fontSize = '2rem';
}

console.log(listItems)

const $firstLink = document.querySelector('section')
$firstLink.style.setProperty("display", "flex")
console.log($firstLink)

// :root css
const $html = document.documentElement
const $body = document.body

let darkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
yellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")  

```
#### modifying elements
```javascript
const $cards = document.querySelector('.cards'), 
 $newCard = document.createElement('figure'),
 $cardsClone = $cards.cloneNode(true), // it clones the html of $cards

$newCard.innerHTML = `
    <img src="http://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`
$newCard.classList.add('card')

// $cards.replaceChild($newCard, $cards.children[2])
$cards.insertBefore($newCard, $cards.lastElementChild)

// removing
$cards.removeChild($cards.firstChild)
```

### Best way of doing the same (modifying)
.insertAdjacent
    * insertAdjacentElement(position, element)
    * insertAdjacentHtml(position, element)
    * insertAdjacentText(position, element)

position
    * beforebegin
    * afterbegin
    * beforeend
    * afterend

#### A little bit of BOM

```javascript
window.addEventListener("scroll", e => {
    console.log(window.scrollY)
    console.log(window.scrollX)
})

window.addEventListener("DOMContentLoaded", e => {
    console.log(window.screenY)
    console.log(window.screenX)
})
```