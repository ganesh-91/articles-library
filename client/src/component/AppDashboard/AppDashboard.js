import React, { useEffect, useState } from 'react';

import ArticleListWrapper from './ArticleListWrapper';
import Header from './Header';
import { apiCallGet, apiCallPost, apiCallPut, apiCallDelete } from '../../utils/authInterceptor';
import './AppDashboard.css'

const AppDashboard = () => {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({count: 0, resPerPage: 3, page: 1})

  useEffect(() => {
    getList()
    // return () => {
    //   cleanup
    // };
  }, [])

  const getList = () => {
    apiCallGet('/article?resPerPage=3&page=1').then((response) => {
      console.log('response', response.data.pagination);
      setList(response.data.data)
      setPagination(response.data.pagination)
    })
      .catch((error) => {
        console.log(error);
      });
  }

  const rateArt = (id, action) => {
    console.log(typeof (id), typeof (action))
    apiCallPut(`/article/rate/${id}/${action}`).then((response) => {
      getList();
    })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <main role="main" className="app-dashboard container jumbotron">
      <Header />
      <ArticleListWrapper pagination={pagination} list={list} rateArt={rateArt} />
    </main>
  );
}

export default AppDashboard;
