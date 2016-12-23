import React, { Component, PropTypes } from 'react'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        comment: ''
    }

    render() {
        return (
            <div>
                Input username:
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
                Input comment:
                <textarea value={this.state.comment} onChange={this.handleChangeComment}></textarea>
                <input type="submit" value="Post comment" onClick={this.postComment}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length <= 10) {
            this.setState({
                username: ev.target.value
            })
        }
    }

    handleChangeComment = ev => {
        this.setState({
            comment: ev.target.value
        })
    }

    postComment = ev => {
        ev && ev.preventDefault && ev.preventDefault();
        if (this.state.username == '') {
            console.log('User\'s name is missing');
        } else if (this.state.comment == '') {
            console.log('Comment is missing');
        } else {
            console.log('==== New comment ====');
            console.log('User: ' + this.state.username);
            console.log('Comment: ' + this.state.comment);
        }
    }
}

export default CommentForm