

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindAppDataChange(this.appDataChange.bind(this));
        this.view.bindAppClick(this.handleChange.bind(this));
        this.view.bindAppClickPost(this.handleChangePost.bind(this));

        this.appDataChange(this.model.data)
    }

    appDataChange(data) {
        this.view.renderApp(data);
    }

    handleChange(userId) {

            this.model.getPosts(userId);
    }

    handleChangePost(userId, postId) {

        this.model.getComment(userId, postId)
    }

}

export { Controller }