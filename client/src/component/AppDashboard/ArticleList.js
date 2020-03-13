import React from 'react'

const ArticleList = ({ list, rateArt }) => {

    return (
        <div className="articles-list px-3">
            {list.map((el) => {
                return (
                    <div key={Math.random().toString()} className="media text-muted pt-3 border-bottom border-gray ">
                        <div className="article-meta">
                            <div className="media-body pb-3 mb-0 small lh-125 text-left">
                                <h6 className="d-block text-gray-dark">
                                    <a href={el.url} target="blank">{el.title}</a>
                                </h6>
                                {/* <span>{el.description}</span> */}
                            </div>
                            <div className="rating-block-wrapper">
                                <div className="rating-button" onClick={() => { rateArt(el._id.toString(), "UP") }}>
                                    <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" /></svg>
                                </div>
                                <div>{el.rating}</div>
                                <div className="rating-button" onClick={() => { rateArt(el._id.toString(), "DOWN") }}>
                                    <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="author-info">
                            <div>{el.author.user_name}</div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>);
            })}


        </div>
    )
}

export default ArticleList
