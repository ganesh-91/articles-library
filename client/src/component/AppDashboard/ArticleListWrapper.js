import React from 'react'
import Actions from './Actions'
import ArticleList from './ArticleList'

const ArticleListWrapper = ({ list, rateArt, pagination }) => {
    console.log('pagination', pagination)
    const from = pagination.count > 0 ? (((pagination.page * pagination.resPerPage) - pagination.resPerPage) + 1) : 0;
    const to = (pagination.page * pagination.resPerPage) < pagination.count ? (pagination.page * pagination.resPerPage) : pagination.count;
    return (
        <div className="my-3 pb-3 pt-3 bg-white rounded shadow-sm article-list-wrapper">
            <Actions />
            <ArticleList list={list} rateArt={rateArt} />
            <div className="text-right mt-3 px-3 pagination">
                <div className="pagination-action">
                    <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z" /></svg>
                </div>
                <div className="pagination-info">
                    <small>{from} - {to} / {pagination.count}</small>
                </div>
                <div className="pagination-action">
                    <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" /></svg>
                </div>

            </div>
        </div>
    )
}

export default ArticleListWrapper
