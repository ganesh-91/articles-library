import React from 'react'
import Actions from './Actions'
import ArticleList from './ArticleList'

const ArticleListWrapper = ({ list, rateArt }) => {
    console.log('list', list)
    return (
        <div className="my-3 pb-3 pt-3 bg-white rounded shadow-sm article-list-wrapper">
            <Actions />
            <ArticleList list={list} rateArt={rateArt} />
            <small className="d-block text-right mt-3">
                <a href="#">All updates</a>
            </small>
        </div>
    )
}

export default ArticleListWrapper
