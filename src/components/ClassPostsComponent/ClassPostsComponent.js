import {Component} from "react";

import {Post} from "../Post/Post";
import {commentService, postService} from "../../services";
import {ClassCommentComponent} from "../ClassCommentComponent/ClassCommentComponent";
import css from './classPosts.module.css'


class ClassPostsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {posts: [], postId: '', comments: []}
        this.setPostId = this.setPostId.bind(this)
    }

    componentDidMount() {
        postService.getAll().then(value => this.setState({posts: [...value]}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.postId) {
            commentService.getByIdPost(this.state.postId).then(value =>
                this.setState({comments: [...value]})
            )
        }
    }

    setPostId = (id) => {
        this.setState({postId: id})
    }

    render() {
        return (
            <div className={css.postsBlock}>
                <div className={css.postsList}>
                    <h2>Posts</h2>
                    {this.state.posts.map(post => <Post key={post.id} post={post} setPostId={this.setPostId}/>)}
                </div>
                <div className={css.commentsList}>
                    <h2>Comments</h2>
                    {!!this.state.comments.length && this.state.comments.map(comment => <ClassCommentComponent
                        key={comment.id} commet={comment}/>)}
                </div>
            </div>
        )
    }
}

export {ClassPostsComponent}