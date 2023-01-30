var form =document.getElementById('addForm')
var itemlist=document.getElementById('items')
var filter=document.getElementById('filter')
form.addEventListener('submit', addItem)
form.addEventListener('click', remitem)
filter.addEventListener('keyup',finditem)
function addItem(e)
{
    e.preventDefault();
    var newitem =document.getElementById('item').value ;
   // console.log(newitem)
    var li =document.createElement('li')
    li.className ='list-group-item'
    li.appendChild(document.createTextNode(newitem))
    var deletebtn =document.createElement('btn')
    deletebtn.className ='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('x'))
    li.appendChild(deletebtn)
    itemlist.appendChild(li)


}
function remitem(e)
{
   if(e.target.classList.contains('delete'))
   {
    if(confirm("are u sure"))
    li =e.target.parentElement
    itemlist.removeChild(li)
   
    
    } 
}

function finditem(e)
{
    var text =e.target.value.toLowerCase()
    var items=itemlist.getElementsByTagName('li')
    Array.from(items).forEach(function (item)
    {
        var itemname =item.firstChild.textContent
        if(itemname.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block'
        }
        else
        {
            item.style.display='none'
        }
    })

}