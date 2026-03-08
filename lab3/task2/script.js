const form=document.getElementById("todo-form");
const input=document.getElementById("new-task");
const list=document.getElementById("task-list");

form.addEventListener("submit",function(e){
  e.preventDefault();

  if(!input.value)return;

  const li=document.createElement("li");

  const checkbox=document.createElement("input");
  checkbox.type="checkbox";

  checkbox.onclick=function(){
    if(checkbox.checked){
      li.className="done";
    }else{
      li.className="";
    }
  };

  const text=document.createElement("span");
  text.innerText=input.value;

  const del=document.createElement("button");
  del.innerText="Delete";

  del.onclick=function(){
    li.remove();
  };

  li.append(checkbox,text,del);
  list.append(li);

  input.value="";
});

