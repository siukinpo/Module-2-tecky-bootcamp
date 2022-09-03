//Function Definition
async function loadTODO(){
    const res = await fetch("/memos");
    const memos = await res.json();

    const list = document.querySelector("div.todo-list");
    list.innerHTML = "";
    let idx = 0;
    for(let memo of memos){
        list.innerHTML += `<div id="todo-${idx}" class="todo">
        ${memo.content}
        <button>Edit</button>
        <button>Delete</button>
    </div>`
    idx++;
    }
}

async function loadTODOById(id){
    const res = await fetch("/memo?memo_id=1");
    const memo = await res.json(); /*{id:1,content:"TODO#2",image:""}*/
}

//Execute
loadTODO();