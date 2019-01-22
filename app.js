// document.getElementsByTagName('ul')[0]
var ul = document.querySelector('ul')
var li = document.createElement('li')
li.append('Hello world')
ul.appendChild(li)

navigator.getBattery().then(i => i.onchargingchange = function () {
  alert("YOU PLUGGED IN YOUR COMPUTER")
})
