import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentsList extends Component {

    state = {
        isOpen: false
    };

    render() {
        return (
            <div className="comments-list">
                {this.getBody()}
            </div>
        )
    };

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBody() {
        const { comments } = this.props;
        let commentsElements, commentsLabel;
        if (comments) {
            commentsElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>);
        } else {
            //пустая строка - не лучший выбор, лучше бы [], null или undefined
            // commentsElements = '';
            commentsElements = undefined;
        }

        if (!this.state.isOpen) {
            commentsLabel = 'Show comments';
            //если уже сравниваешь с '', то делай !==
            // if (commentsElements != '') {
            if (commentsElements) {
                return (
                    <div>
                        <h4 className="comments-link" onClick = {this.toggleOpen}>{commentsLabel}</h4>
                    </div>
                )
            }

        } else {
            commentsLabel = 'Hide comments';
            if (commentsElements != '') {
                return (
                    <div>
                        <h4 className="comments-link" onClick = {this.toggleOpen}>{commentsLabel}</h4>
                        <ul>
                            {commentsElements}
                        </ul>
                    </div>
                )
            }
        }
    }

}
