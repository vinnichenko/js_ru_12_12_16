import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = (ev)  => {
        ev.preventDefault()
        this.props.addComment(this.state, this.props.articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        // const articleId = this.props;
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, { addComment })(NewCommentForm)