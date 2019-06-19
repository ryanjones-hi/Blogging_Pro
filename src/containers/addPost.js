import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class AddPost extends React.Component{

    renderField(field)
    {
        const className= `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label> {field.label}: </label>
                <input 
                    {...field.input} 
                    type="text" 
                    className="form-control"/>

                    <div className="text-help">
                        {field.meta.touched ? field.meta.error : ''}
                    </div>
            </div>
        )
    }

    onFormSubmit(values)
    {
        this.props.createPost(values, () =>{
            this.props.history.push('/');
        });
    }


    render(){

        const { handleSubmit } = this.props;

        return(

            <div className="container col-md-6">
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <Field name="title" className="" label="Title" component={this.renderField} />
                    <Field name="categories" label="Categories" component={this.renderField} />
                    <Field name="content" label="Post Content" component={this.renderField} />
                    <button type="submit" className="btn btn-primary"> Submit </button>

                    <Link to='/' className="btn btn-danger">Cancel</Link>
                    </form>
            </div>
        )
    }
}

function validate(values)
{
    const errors = {};

    if(!values.title || values.title.length < 3)
    {
        errors.title = "Enter a Title that is atleast 3 char long!"
    }
    if(!values.categories)
    {
        errors.categories = "Enter a category!"
    }
    if(!values.content)
    {
        errors.content = "Enter some content!"
    }


    // If errors obj is empty form is good for submission.
    return errors;
}

export default reduxForm({
  // a unique name for the form
  validate, 
  form: 'postNewForm'
})
(
    connect(null,{createPost})(AddPost)
    );
