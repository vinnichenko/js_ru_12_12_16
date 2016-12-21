import React, {PropTypes} from 'react'
import Article from './Article'
import Chart from './Chart'
import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends React.Component {

    render() {
        const {articles, openArticleId} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={openArticleId == article.id}
                         onClick={this.props.toggleOpenArticle(article.id)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
                <Chart articles={articles}/>
            </div>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleOpen(ArticleList)