import React from 'react';
import { connect } from 'react-redux';

class ActivePost extends React.Component{

    render()
    {

        if(!this.props.activePost)
        {
            return(
                <div className="container col-md-8"><h3 className="text-center"> Select a Post </h3></div>
            )
        }

        return(
            <div className="container col-md-8">
                <h4 className="text-center"> Active Post </h4>
                <div className="container">
                    <h3> {this.props.activePost.title} </h3>
                    <h4> Category: {this.props.activePost.categories}</h4>
                    <p className="col-md-6">{this.props.activePost.content}</p>
                </div>
            </div>
        );
    }
}

function mapSateToProps(state)
{
    return{
        activePost: state.activePost
    }
}


export default connect(mapSateToProps)(ActivePost); ;