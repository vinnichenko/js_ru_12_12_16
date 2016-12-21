//decorator === HOC(Higher Order Component)
import React from 'react'

export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            isOpen: false,
            openArticleId: null
        }
        render() {
            return <Component {...this.props} {...this.state}
                              toggleOpen = {this.toggleOpen}
                              toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpen = ev => {
            ev && ev.preventDefault && ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        toggleOpenArticle = id => ev => {
            this.setState({
                openArticleId: id
            });
            if (this.state.openArticleId == id) {
                this.setState({
                    openArticleId: null
                });
            }
        }

    }
}