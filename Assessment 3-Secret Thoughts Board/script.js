const input = document.querySelector("input")
let thoughts=[];

function add(){
    const thought = input.value;
    thought.trim();

    if(thought ===""){
        alert("Please write something");

    }

    thoughts.push(thought);
    input.value = "";
    
}

// document.createElement("li");
function show(){
    const list = document.querySelector("ul");
    
    

    thoughts.forEach(function(thought){
        // list.innerHTML = `<li>${thought}<li/>`
        const li = document.createElement("li");
        li.innerText= thought;
        list.appendChild(li);
    });
}