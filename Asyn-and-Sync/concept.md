## Synchronous

Functiones are taken to stacks whenever they are ivoked and is always<br> 
going to prioritize an order (executes the code in sequence).

```javascript
function f1() {
  // Some code
}
function f2() {
  f1();
}
function f3() {
  f2();
}
f3();
```

![Synchronous](https://www.freecodecamp.org/news/content/images/2021/09/second-flow.gif)

## Asynchronous 
  1. it means not ocurring at the same time

The Asynchronous Js is usually used when you want <br>
to delay something, **Browser API/Web API** and <br>
**Promises** are a way of using asynchronous javascript.

```javascript
let seconds = 2000;

function data() {
    console.log("Loading data...");
}

setTimeout(() => {
    console.log("this took 2s");
}, seconds)

data();
```
#### OutPut 
  1. Loading data...
  2. this took 2s

![Asynchronous](https://www.freecodecamp.org/news/content/images/size/w1000/2021/09/taskQ.png)

keep in mind the flowing code:

```javascript
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    f2();
}

main();
```

![Asynchronous](https://www.freecodecamp.org/news/content/images/2021/09/third-flow.gif)

f1() is sent to the **queue** when the stack is empty the f1() is sent back<br>
to the stack and then is executed.

### Job Queue
  1. it kicks in when using promises

item in callback: **macro task** (prioritize first)
item in job queue: **micro task** (prioritize second)

When the stack is empty it executes first the micro-task and then the macro-task

![jobQueue](https://www.freecodecamp.org/news/content/images/size/w1000/2021/09/JObQ.png)

```javascript
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    new Promise((resolve, reject) =>
        resolve('I am a promise')
    ).then(resolve => console.log(resolve))
    
    f2();
}

main();
```

![jobQueue](https://www.freecodecamp.org/news/content/images/2021/09/fourth-flow.gif)