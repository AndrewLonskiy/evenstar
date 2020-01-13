class User {
    constructor() {
        // this.data = data;
        // this.place = place;
        // this.name = name;
    }

    renderUser(data, name, place) {

        let divContainer = document.createElement('div');
        divContainer.classList.add(`${name}`);

        data.forEach(item => {

            let div = document.createElement('div');
            div.setAttribute(`${name}-id`, item.id);
            div.innerText = item.name;
            // div.contentEditable = 'true';
            div.style.border = "3px solid black";

            divContainer.append(div);
        });
        place.append(divContainer);
    }
}

class Post {
    constructor(data, name, userId, place) {
        this.data = data;
        this.place = place;
        this.name = name;
        this.id = userId;
    }

    renderPost() {
        let divPost = document.createElement('div');
        divPost.classList.add(`${this.name}`);

        this.data.forEach((item) => {

            if (+(item.userId) === +(this.id)) {

                let div = document.createElement('div');
                div.setAttribute(`${this.name}-id`, item.id);
                div.innerText = item.body;
                div.style.border = "3px solid black";

                divPost.append(div);
            }
        });

        this.place.appendChild(divPost);
    }
}

class Album {
    constructor(data, name, userId, place) {
        this.data = data;
        this.place = place;
        this.name = name;
        this.id = userId;
    }

    renderAlbum() {
        let divAlbum = document.createElement('div');
        divAlbum.classList.add(`${this.name}`);

        this.data.forEach((item) => {

            if (+(item.userId) === +(this.id)) {

                let div = document.createElement('div');
                div.setAttribute(`${this.name}-id`, item.id);
                div.innerText = item.title;
                div.style.border = "3px solid black";

                divAlbum.append(div);
            }
        });

        this.place.append(divAlbum);
    }
}

class Photo {
    constructor(data, name, albumId, place) {
        this.data = data;
        this.place = place;
        this.name = name;
        this.id = albumId;
    }

    renderPhoto() {
        let divPhoto = document.createElement('div');
        divPhoto.classList.add(`${this.name}`);

        this.data.forEach((item) => {

            if (+(item.albumId) === +(this.id)) {

                let img = document.createElement('img');
                img.setAttribute(`${this.name}-id`, item.id);
                img.innerText = item.title;
                img.src = item.url;
                img.style.border = "1px solid black";
                img.style.height = "15px";
                img.style.width = "15px";

                divPhoto.append(img);
            }
        });

        this.place.append(divPhoto);
    }
}

class Comment {
    constructor(data, name, postId, place) {
        this.data = data;
        this.place = place;
        this.name = name;
        this.id = postId;
    }

    renderComment() {
        let divComment = document.createElement('div');
        divComment.classList.add(`${this.name}`);

        this.data.forEach((item) => {

            if (+(item.postId) === +(this.id)) {

                let div = document.createElement('div');
                div.setAttribute(`${this.name}-id`, item.id);
                div.style.border = "1px solid black";
                div.innerText = item.body;

                divComment.append(div);
            }
        });

        this.place.append(divComment);
    }
}

function getNewData(url) {
    return fetch(url)
        .then(response => response.json())
}

let mainContainer = document.querySelector('.main_container');

const test = getNewData('https://jsonplaceholder.typicode.com/users');
test.then((res) => {
    console.log(res);
   let user = new User();
    user.renderUser(res, 'user', mainContainer);
    document.querySelectorAll('[user-id]').forEach(item => item.addEventListener('click', magic))
});

function magic() {
    console.log(event);
    if (event.target.hasAttribute('user-id')) {
        if (event.target.firstElementChild) {
            while (event.target.firstElementChild) {
                event.target.removeChild(event.target.firstElementChild);
            }
        } else {
            let user_id = event.target.getAttribute('user-id');
            let place = event.target;
            getNewData('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    let post = new Post(res, 'post', user_id, place);
                    post.renderPost();
                });
            getNewData('https://jsonplaceholder.typicode.com/albums')
                .then((res) => {
                    let album = new Album(res, 'album', user_id, place);
                    album.renderAlbum();
                })
        }
    } else if (event.target.hasAttribute('post-id')) {
        if ((event.target.lastChild.nodeName === "DIV")) {
            event.target.children[3].remove();
        } else {
            let post_id = event.target.getAttribute('post-id');
            let place = event.target;
            getNewData('https://jsonplaceholder.typicode.com/comments')
                .then((res) => {
                    let comment = new Comment(res, 'comment', post_id, place);
                    comment.renderComment();
                })

        }
    } else if (event.target.hasAttribute('album-id')){
        if ((event.target.firstElementChild)) {
            while (event.target.firstElementChild) {
                event.target.removeChild(event.target.firstElementChild);
            }
        } else {
            let album_id = event.target.getAttribute('album-id');
            let place = event.target;
            getNewData('https://jsonplaceholder.typicode.com/photos')
                .then((res) => {
                    let photo = new Photo(res, 'photo', album_id, place);
                    photo.renderPhoto();
                })
        }
    }

}

