import React, { useEffect, useState } from 'react';

import ArticleListWrapper from './ArticleListWrapper';
import Header from './Header';
import { apiCallGet, apiCallPost, apiCallPut, apiCallDelete } from '../../utils/authInterceptor';
import './AppDashboard.css'

const AppDashboard = () => {
  const [list, setList] = useState([]);
  const [resPerPage, setResPerPage] = useState(20)
  const [page, setPage] = useState(1)
  const [pagination, setPagination] = useState({ count: 0, resPerPage: 0, page: 0 })

  useEffect(() => {
    getList(page)
    // return () => {
    //   cleanup
    // };
  }, [page])

  const getList = (page) => {
    apiCallGet(`/article?resPerPage=${resPerPage}&page=${page}`).then((response) => {
      // console.log('response', response.data.pagination);
      setList(response.data.data)
      setPagination(response.data.pagination)
    })
      .catch((error) => {
        console.log(error);
      });
  }

  const rateArt = (id, action) => {
    console.log(typeof (id), typeof (action))
    apiCallPut(`/article/rate/${id}/${action}`)
      .then((response) => {
        getList();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const prvEvent = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const urlEnter = (url,cb) => {
    apiCallPost('/article', {
      url
    }).then((response) => {
      console.log('urlEnter', response)
      getList(page);
      cb();
    })
      .catch((error) => {
        console.log('error', error.response);
      });
    console.log('url', url)
  }

  const nxtEvent = () => {
    if (page < (pagination.count / pagination.resPerPage)) {
      setPage(page + 1);
    }
  }

  return (
    <main role="main" className="app-dashboard container jumbotron">
      <Header urlEnter={urlEnter} />
      <ArticleListWrapper prvEvent={prvEvent} nxtEvent={nxtEvent} pagination={pagination} list={list} rateArt={rateArt} />
    </main>
  );
}

export default AppDashboard;
