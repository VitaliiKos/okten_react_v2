import {Component} from "react";

import css from './comments.module.css';

class ClassCommentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {commentId: ''}
    }

    render() {
        return (
            <div className={css.commentCard}>
                <h3>{this.props.commet.id}</h3>
                <h3>{this.props.commet.name}</h3>
                <h3>{this.props.commet.email}</h3>
            </div>

        )
    }
}

export {
    ClassCommentComponent
}