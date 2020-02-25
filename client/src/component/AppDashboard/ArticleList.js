import React from 'react'

const ArticleList = ({ list }) => {
    return (
        <div className="">
            {/* <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a></div>
            <div  className="list-group"><a href="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a></div> */}
            {/* <nav className="nav d-block list-discussions-js mb-n6">
                                        <a className="text-reset nav-link p-0 mb-6" href="chat-1.html">
                    <div className="card card-active-listener">
                        <div className="card-body">

                            <div className="media">

                                <div className="media-body overflow-hidden">
                                    <div className="d-flex align-items-center mb-1">
                                        <h6 className="text-truncate mb-0 mr-auto">Bootstrap Themes</h6>
                                        <p className="small text-muted text-nowrap ml-4">10:42 am</p>
                                    </div>
                                    <div className="text-truncate">Anna Bridges: Hey, Maher! How are you? The weather is great isn't it?</div>
                                </div>
                            </div>

                        </div>


                        <div className="badge badge-circle badge-primary badge-border-light badge-top-right">
                            <span>3</span>
                        </div>

                    </div>
                </a>
            </nav> */}
            {list.map((el) => {
                return (
                    <div key={Math.random().toString()} className="media text-muted pt-3 border-bottom border-gray">
                        <div className="article-meta">
                            <div className="media-body pb-3 mb-0 small lh-125 text-left">
                                <h6 className="d-block text-gray-dark">
                                    <a href={el.title} target="blank">{el.title}</a>
                                </h6>
                                {/* <span>{el.description}</span> */}
                            </div>
                            <div className="rating-block-wrapper">
                                <div className="rating-button">
                                    <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" /></svg>
                                </div>
                                <div>{el.rating}</div>
                                <div className="rating-button">
                                    <svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="author-info">
                            <div>{el.author.email}</div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>);
            })}


        </div>
    )
}

export default ArticleList
