class View {

    constructor() {
        this.app = this.getElement('#main');


    }

    createElement(tag) {
        const element = document.createElement(tag);

        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    renderApp(data) {
        while (this.app.firstChild) {
            this.app.removeChild(this.app.firstChild)
        }

        data.forEach(item => {

            let divUser = this.createElement('div');
            divUser.innerText = item.name;
            divUser.setAttribute('user', item.id);
            divUser.style.border = "3px solid black";

            if (item.post) {
                item.post.forEach(itemPost => {
                    let divPost = this.createElement('div');
                    divPost.innerText = itemPost.title;
                    divPost.setAttribute('post', itemPost.id);
                    divPost.style.color = "blue";

                    if (itemPost.comment) {
                        itemPost.comment.forEach(itemComment => {

                            let divComment = this.createElement('div');
                            divComment.innerText = itemComment.body;
                            divComment.style.color = "red";

                            divPost.append(divComment);
                        })

                    }

                    divUser.append(divPost);
                })
            }


            this.app.append(divUser);


        })
    }

    bindAppClick(handler) {
        this.app.addEventListener('click', event => {
            if (event.target.hasAttribute('user')) {
                if (event.target.firstElementChild) {
                    while (event.target.firstElementChild) {
                        event.target.removeChild(event.target.firstElementChild)
                    }
                } else {
                    const id = parseInt(event.target.attributes[0].value);
                    console.log(event);
                    console.log(id);

                    handler(id)
                }
            }
        })
    }

    bindAppClickPost(handler) {
        this.app.addEventListener('click', event => {
            console.log(event);
            if (event.target.hasAttribute('post')) {
                if (event.target.firstElementChild) {
                    while (event.target.firstElementChild) {
                        event.target.removeChild(event.target.firstElementChild)
                    }
                } else {
                    const userId = parseInt(event.target.parentNode.attributes[0].value);
                    const postId = parseInt(event.target.attributes[0].value);

                    handler(userId, postId)
                }
            }
        })
        }
}

// let view = new View();
// view.renderApp(user.data);

export { View }