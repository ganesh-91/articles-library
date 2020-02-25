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
                    <div key={Math.random().toString()} className="media text-muted pt-3">
                        <p className="media-body pb-3 mb-0 small lh-125 text-left border-bottom border-gray">
                            <strong className="d-block text-gray-dark">{el.title}</strong>
                            {/* <span>{el.description}</span> */}
                        </p>
                        <div>
                           <div>
                            <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>
                           </div>
                            <div></div>
                            <div>
                            <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>

                            </div>
                        </div>
                    </div>);
            })}


        </div>
    )
}

export default ArticleList
