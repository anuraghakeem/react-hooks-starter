/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import UserHeader from '../userHeader/UserHeader';

export class PostList extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <br />
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }
    render() {
        console.log(this.props.posts);
        return (
            <div className = "getPostList">
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.post }
}

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);