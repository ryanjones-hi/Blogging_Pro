import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {getPost} from '../actions';
import {deletePostAction} from '../actions';

class PostShow extends React.Component{

    componentDidMount(){

        if(!this.props.post)
        {
            const {id} = this.props.match.params;
            this.props.getPost(id);
        }  
    }

    deletePost()
    {
        const {id} = this.props.match.params;
        this.props.deletePostAction(id , () => {
            this.props.history.push('/');
        });
    }

    render()
    {
        const {post} = this.props;

        if(!post)
        {
            return <div> Loading .... </div>;
        }

        return(
            <div>
                    <Link to="/"> Back </Link>
                    <button 
                        className="btn btn-danger pull-xs-right"
                        onClick={this.deletePost.bind(this)} > Delete </button>
                    
                    <h3> {post.title} </h3>
                    <h4> Category: {post.categories}</h4>
                    <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({posts}, ownProps)
{
    return{
        post: posts[ownProps.match.params.id]
    };
}

export default connect(mapStateToProps, {getPost, deletePostAction})(PostShow);