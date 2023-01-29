header =document.getElementById('main-header')
header.style.borderBottom ='solid 3px #000'
var items =document.getElementsByClassName('list-group-item')
items[1].textContent="hello"
items[2].style.backgroundColor='green'
items[1].style.fontWeight='bold'
var input =document.querySelector('input')
input.value ='hello'