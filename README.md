# W3D2 Client Side JS

Repo: https://github.com/NimaBoscarino/client-side-js-notes

Hop through the various branches in this repo to see the KanyeSounds.com demo be built up!

Today we tackled 4 main things.

1. Browsers
2. What is the DOM?
3. What can we do with Client Side JS?
4. Manipulating the document
5. DOM Events

### Browsers
There's a bunch of them! Chrome, Safari, IE, Firefox... As we saw in the ES6 lecture, browsers have a Javascript engine in them to interpret the Javascript that is embedded in an HTML webpage. Each browser might have a different engine, but they behave the same way. Generally, the context of writing Javascript in a browser is different than writing Javascript for Node. As we saw in lecture, we have access to different global objects. More on that in a minute...

### DOM - What is it?
The DOM (Document Object Model) is the API that lets us treat a webpage as a tree-structure. It makes it easy for us to find nodes, manipulate nodes, delete nodes, and even add new nodes.

```
HTML
|_____ head
|        |____title
|
|_____ body
        |__div
        |__p
```

### What can we do with ?
There are several ways for us to navigate and affect the DOM.
1. Navigator
    1. `navigator.geolocation.getCurrentPosition(res => console.log(res))`
    2. `navigator.getBattery().then(res => console.log(res))`
    3. The navigator gives us access to the state and identity of the user agent
2. Window
    1. The window is the tab that our page is displayed in
    2. `window` is the `this` object in client-side JS.
    3. Try looking at `window.innerHeight` in the console!
3. Document
    1. Exists inside of window... and it's where we spend most of our time today

### Document
We can select single elements or collections of elements with the DOM API
```js
var elem = document.getElementById('someId') // a single element
var elems = document.getElementsByClassName('someClass') // a LIST of elements
var elems2 = document.getElementsByTagName('p') // a LIST of elements
```

We also have access to query selection, similar to CSS
```js
document.querySelector('.className ul') // one element
document.querySelectorAll('.className ul li') // list of elements
```

We can also create new elements and attach them to the document:
```js
var ul = document.querySelector('ul')
var li = document.createElement('li')
li.append('Hello world')
ul.appendChild(li)
```

### DOM Events
The general form for attaching event listeners to an element looks like this:

```js
element.addEventListener('click', (e) => {
    // some action!
})
```

Remember that if you want to remove an event listener, you can't just pass in an anonymous function literal. Instead, we have to do this:

```js
let f = function(event) { // the function in questio
    console.log(event)
}
element.addEventListener('click', f) // attach!
element.removeEventListener('click', f) // detach!
```

### Final note:
We talked about attaching our JS files to the HTML documents. Generally, we can either stick the `<script>` tag in the Head, or at the bottom of the Body.

If we put the tag in the Head of the document, we need to ensure that the script only executes after the page has loaded. We can do this by writing all of our code in a listener like this (or something similar with jQuery):
```js
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    // rest of code
});
```

OR we can just give our `<script>` tag an "async" attribute:
```html
<script async src="app.js"></script>
```

#### Conclusion
That's pretty much it! Welcome to client-side Javascript!

Nima Boscarino