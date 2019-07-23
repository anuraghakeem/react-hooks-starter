/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getPosts } from '../../actions';
import UserHeader from '../userHeader/UserHeader';

export class PostList extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.getPosts();
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2 className="getPostTitle">{post.title}</h2>
                            <p className="getPostBody">{post.body}</p>
                        </div>
                        <br />
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className = "getPostList">
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
            </div>
        )
    }
}

PostList.propTypes = {
    posts: propTypes.array,
    getPosts: propTypes.func
}

const mapStateToProps = (state) => {
    return { posts: state.post }
}

export default connect(
    mapStateToProps,
    { getPosts }
)(PostList);