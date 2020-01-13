let arr = [{
    text: "e.target",
    status: "active",
    id: 0
}];
let addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', saveData);
let activeElem = document.getElementById('toDoList');
let doneElem = document.getElementById('done');
document.querySelector('.textInput').select();

class Todo {

    constructor(arr, actElem, doneElem) {
        this.arr = arr;
        this.activeElem = actElem;
        this.doneElem = doneElem;
    }

    renderToPage() {

        this.arr.forEach((item, index) => {

            let btnDone = document.createElement('button');
            btnDone.classList.add('btnDone');
            btnDone.innerText = "+";
            btnDone.addEventListener('click', this.btnDonefunc.bind(this));
            let divText = document.createElement('div');
            divText.innerText = item.text;
            let btnDelete = document.createElement('button');
            btnDelete.classList.add('btnDelete');
            btnDelete.innerText = "-";
            btnDelete.addEventListener('click', this.btnDeleteFunc.bind(this));
            let div = document.createElement('div');
            div.classList.add('item');
            div.style.border = "1px solid black";
            div.style.height = "20px";
            div.id = index;
            div.append(btnDone);
            div.append(divText);
            div.append(btnDelete);

            if (item.status === "active") {
                if (!(Array.from(document.querySelectorAll('.item')).some(itemF => +(itemF.id) === item.id))) {
                    this.activeElem.append(div);
                }
            } else {
                if (!(Array.from(document.querySelectorAll('.item')).some(itemF => +(itemF.id) === item.id))) {
                    this.doneElem.append(div);
                }
            }
        })
    }

    btnDonefunc() {
        if (this.arr[event.target.parentNode.id].status === "active") {
            this.arr[event.target.parentNode.id].status = "done";
            event.target.parentNode.remove();
            this.renderToPage();
        } else {
            this.arr[event.target.parentNode.id].status = "active";
            event.target.parentNode.remove();
            this.renderToPage();
        }
    }

    btnDeleteFunc() {
        delete this.arr[event.target.parentNode.id];
        event.target.parentNode.remove();
        this.renderToPage();
    }
}

function saveData(e) {
    if (e.target.previousElementSibling.children[0].value) {
        let obj = {
            text: e.target.previousElementSibling.children[0].value,
            status: "active",
            id: arr.length
        };

        arr.push(obj);
        e.target.previousElementSibling.children[0].value = "";
        render.renderToPage();
    }
}

let render = new Todo(arr, activeElem, doneElem);
render.renderToPage();