let item=document.getElementById("item");
let parentList=document.querySelector('.parentList')
function add (){
    let newli=document.createElement('li');
    newli.className="list list-group-item d-flex justify-content-center  w-50 py-1";
    newli.innerHTML=`
    <h3 class=" ">${item.value}</h3>
    <button class="btn btn-danger  rounded" onclick="del(this)">Delete</button>
    <button class="btn btn-success rounded" onclick="edit(event)">Edit</button> `;
    
    parentList.appendChild(newli);
}
function edit(e){
    let newinput=document.createElement("input");
let currbtn=e.currentTarget;
let curritem;
   if(currbtn.textContent=="Edit")
{currbtn.textContent="Done";
let l=currbtn.previousElementSibling.previousElementSibling;

currbtn.previousElementSibling.textContent="Cancel"
curritem=l.textContent;
newinput.value=curritem;
//console.log(l.textContent);
currbtn.parentElement.replaceChild(newinput,l)}
 else{
    currbtn.textContent="Edit";
    let m=currbtn.previousElementSibling.previousElementSibling;

    let newh1=document.createElement("h3")
currbtn.previousElementSibling.textContent="Delete"
newh1.textContent=m.value;

currbtn.parentElement.replaceChild(newh1,m)
 }
}
function del(t){
    t.parentElement.remove();
    if(parentList.children.length<=0)
    {alert("list is empty!! add items")}
}