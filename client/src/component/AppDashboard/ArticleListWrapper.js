import React from 'react'
import Actions from './Actions'
import ArticleList from './ArticleList'

const ArticleListWrapper = ({ list }) => {
    console.log('list',list)
    return (
        <div className="my-3 p-3 bg-white rounded shadow-sm">
            <Actions />
            <ArticleList />
            <small className="d-block text-right mt-3">
                <a href="#">All updates</a>
            </small>
        </div>
    )
}

export default ArticleListWrapper
