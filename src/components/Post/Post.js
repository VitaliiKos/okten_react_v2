import {Component} from "react";

import css from './post.module.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {post: [], postId: ''}
    }

    render() {
        return (
            <div className={css.postCard}>
                <h3>ID:{this.props.post.id}</h3>
                <h3>Title:{this.props.post.title}</h3>
                <button className={css.button} onClick={() => this.props.setPostId(this.props.post.id)}>Get comments
                </button>
            </div>
        )
    }
}

export {Post}