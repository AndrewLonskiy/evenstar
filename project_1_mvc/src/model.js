class Model {
    constructor() {
        this.data = [];
        this.getUsers();
    }

    bindAppDataChange(callback) {
        this.appDataChange = callback;
    }

    getData(url) {
        return fetch(url)
            .then(response => response.json())

    }

    getUsers() {
        this.getData('https://jsonplaceholder.typicode.com/users').then((res) => {
            res.forEach(item => {
                const user = {
                    id: item.id,
                    name: item.name

                };

                this.data.push(user)
            });
            this.appDataChange(this.data)
        })
    }

    getPosts(userId) {
        this.getData('https://jsonplaceholder.typicode.com/posts').then((res) => {
            let posts = [];

            res.forEach(item => {

                if (item.userId === userId) {
                    const post = {
                        id: item.id,
                        title: item.title

                    };
                    posts.push(post)
                }
            });
            this.data.forEach((item) => {
                if (item.id === userId) {
                    item.post = posts;
                }
            });
            this.appDataChange(this.data)
            console.log(this.data)

        })

    }

    getComment(userId, postId) {
        this.getData('https://jsonplaceholder.typicode.com/comments').then((res) => {
            let comments = [];
            res.forEach(item => {

                if (item.postId === postId) {
                    const comment = {
                        id: item.id,
                        body: item.body

                    };
                    comments.push(comment)
                }
            });

            this.data.forEach((item, index) => {
                if (item.id === userId) {
                    item.post && item.post.forEach(itemP => {
                        if (itemP.id === postId) {
                            itemP.comment = comments;
                        }

                    })
                }
            });
            this.appDataChange(this.data)

        })

    }
}

export { Model }
