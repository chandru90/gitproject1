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



