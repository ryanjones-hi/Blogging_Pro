import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';


import ActivePost from './activePost';
import {activePost, fetchPosts} from '../actions/index';

class PostsIndex extends React.Component{

    componentDidMount()
    {
        
             this.props.fetchPosts();

       
    }

    renderPosts()
    {
        return _.map(this.props.posts,(post) => {
            return <li 
                    className="list-group-item btn"
                    key={post.id}> 

                        <Link to={`/show/${post.id}`}>
                            {post.title} 
                        </Link>

                    </li>
        });
    }

    render()
    {
        
        return(
            <div>
                <div className="container col-md-4">
                    <h4 className="text-center"> Existing Posts</h4>
                    <ul className="list-group">
                        { this.renderPosts() }
                    </ul>
                    
                    <ul className="list-group">
                        <Link to='/add'>
                            <li className="list-group-item btn">
                                Add new Post
                            </li>
                        </Link>
                    </ul>

                </div>
                
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({activePost, fetchPosts}, dispatch);
}

function mapSateToProps(state)
{
    return{
        posts: state.posts
    }
}





export default connect(mapSateToProps, mapDispatchToProps)(PostsIndex);