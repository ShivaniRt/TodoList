var ul=document.getElementById('list');
var li;

var addButton=document.getElementById('add');
if(addButton)
{
addButton.addEventListener('click',addItem);
}




var removeBtn=document.getElementById('remove');

if(removeBtn)
{
removeBtn.addEventListener('click',removeItem);

}



function addItem()
{
    var input=document.getElementById('input');
    var item=input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item);

    if(item != ' ')
    {
            //create li
        li=document.createElement('li');

        //create checkbox
       var checkbox=document.createElement('input');
       checkbox.type='checkbox';
       checkbox.setAttribute('id','check');

       //create label
       var label=document.createElement('label');
       label.setAttribute('for','item');

       //add element to pg
       ul.appendChild(label);
       li.appendChild(checkbox).style.marginRight = "5px";

      
       
       label.appendChild(textnode);
       li.appendChild(label);
       ul.insertBefore(li,ul.childNodes[0]);
       li.className='visual'

       setTimeout(()=>
       {
           li.className='visual';
           
       },2);
       input.value='';
    }
     else
     {
        const pval=document.createElement('p');
        pval.textContent="plese enter valid value";
        input.appendChild(pval);

    }

    }


function removeItem()
{
   li=ul.children
   for(let i=0;i<li.length;i++)
   {
       while(li[i] && li[i].children[0].checked)
       {
           ul.removeChild(li[i]);
       }
   
   }
   
   
}