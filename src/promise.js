function getNewData(url) {
    return fetch(url)
        .then(response => response.json())
}

let users = [];
let mainContainer = document.querySelector('.main_container');

const test = getNewData('https://jsonplaceholder.typicode.com/users');
test.then((res) => {
    users = res;
    showUsers();

});

function showUsers() {

    users.forEach((item) => {
        let div = document.createElement('div');
        div.style.border = "1px solid black";
        let h1 = document.createElement('h1');
        h1.innerText = item.name;
        h1.setAttribute('user-id', item.id);
        h1.addEventListener('click', () => {
            showPosts();
            showAlbums();
        });
        div.append(h1);
        mainContainer.append(div);

    })
}

function showPosts() {
    if (!(event.target.nextSibling) || !(event.target.nextSibling.className === "post")) {
        let target = event.target.attributes[0].value;
        let divPost = document.createElement('div');
        divPost.classList.add('post');

        getNewData('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                res.forEach((item) => {

                    if (+(item.userId) === +(target)) {

                        let div = document.createElement('div');
                        div.setAttribute('posts-id', item.id);
                        div.innerText = item.body;
                        div.style.border = "3px solid black";
                        div.addEventListener('click', () => {
                            showComments();
                        });
                        divPost.append(div);

                    }
                })
            });
        event.target.parentNode.append(divPost);

    } else {
        event.target.nextSibling.remove();
    }
}

function showAlbums() {

    if (!(event.target.nextSibling) || !(event.target.nextSibling.className === "album")) {
        let target = event.target.attributes[0].value;
        let divAlbum = document.createElement('div');
        divAlbum.classList.add('album');

        getNewData('https://jsonplaceholder.typicode.com/albums')
            .then((res) => {
                res.forEach((item) => {

                    if (+(item.userId) === +(target)) {

                        let div = document.createElement('div');
                        div.setAttribute('albums-id', item.id);
                        div.innerText = item.title;
                        div.style.border = "3px solid black";
                        div.classList.add('album');
                        div.style.color = "darkblue";
                        div.addEventListener('click', () => {
                            showPhotos();
                        });
                        divAlbum.append(div);
                    }
                })
            });
        event.target.parentNode.append(divAlbum);
    } else {
        event.target.nextSibling.remove();
    }
}

function showPhotos() {

    if (+(event.target.children.length) === 0) {
        let target = event.target.attributes[0].value;

        let divPhotos = document.createElement('div');
        divPhotos.classList.add('photos');

        getNewData('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                res.forEach((item) => {

                    if (+(item.albumId) === +(target)) {
                        let img = document.createElement('img');
                        img.setAttribute('photos-id', item.id);
                        img.innerText = item.title;
                        img.src = item.url;
                        img.style.border = "1px solid black";
                        img.style.height = "15px";
                        img.style.width = "15px";

                        divPhotos.append(img);
                    }
                })
            });
        event.target.appendChild(divPhotos);
    } else {
        let f = event.target.childNodes;
        f.forEach(item => {
            if (item.className === "photos") {
                item.remove();
            }
        })

    }
}

function showComments() {

    if (+(event.target.children.length) === 3) {
        let target = event.target.attributes[0].value;

        let divComment = document.createElement('div');
        divComment.classList.add('comment');
        getNewData('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                res.forEach((item) => {

                    if (+(item.postId) === +(target)) {
                        let div = document.createElement('div');
                        div.setAttribute('comments-id', item.id);
                        div.innerText = item.name;
                        div.style.border = "1px solid black";
                        div.style.color = "gray";

                        divComment.append(div);
                    }
                })
            });
        event.target.appendChild(divComment);
    } else {
        let f = event.target.childNodes;
        f.forEach(item => {
            if (item.className === "comment") {
                item.remove();
            }
        })
    }
}

