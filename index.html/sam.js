header =document.getElementById('main-header')
header.style.borderBottom ='solid 3px #000'
var items =document.getElementsByClassName('list-group-item')
items[1].textContent="hello"
items[2].style.backgroundColor='green'
items[1].style.fontWeight='bold'

var input =document.querySelector('input')
input.value ='hello'
var second =document.querySelector('.list-group-item:nth-child(1)')
second.style.backgroundColor='green'
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0; i<odd.length;i++)
{
odd[i].style.backgroundColor='blue'
}
var third =document.querySelectorAll('.list-group')
third[2].color='red'

var newdiv = document.createElement('div')
newdiv.className ='hi'
newdiv.setAttribute('title','hello div')
var newdivtext=document.createTextNode('hello world')
newdiv.appendChild(newdivtext)
var container=document.querySelector('header .container')
var h1 =document.querySelector('header h1')
container.insertBefore(newdiv,h1)