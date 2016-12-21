//decorator === HOC(Higher Order Component)
import React from 'react'

//для этого следовало завести отдельный декоратор
export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            isOpen: false,
            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
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
            //лучше не делай два setState - сбивает с толку, тяжело читается
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
