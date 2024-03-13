
var getul=document.getElementById('list-container')
function lmn(){
var a = document.getElementById('inp')
var li = document.createElement('li')
var liText = document.createTextNode(a.value)

li.appendChild(liText)
 getul.appendChild(li) 
 a.value = ''

 var deletebtn = document.createElement('button')
 var deletebtnText = document.createTextNode('delete')
 deletebtn.appendChild(deletebtnText)
 li.appendChild(deletebtn)
 deletebtn.setAttribute('onclick', 'dell(this)')



 var editbtn = document.createElement('button')
 var editbtnText = document.createTextNode('edit')
 editbtn.appendChild(editbtnText)
 li.appendChild(editbtn)
 editbtn.setAttribute('onclick', 'edit(this)')

 console.log(li)



}

function dell(e){
    e.parentNode.remove()
    
}
function edit(e){
    var a = prompt('enter edit value,e.parentNode.firstchild.nodevalue')
    e.parentNode.firstchild=a
}

function dele(){
    getul.innerHTML =''
}