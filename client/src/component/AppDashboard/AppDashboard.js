import React, { useEffect, useState } from 'react';

import ArticleListWrapper from './ArticleListWrapper';
import Header from './Header';
import { apiCallGet, apiCallPost, apiCallPut, apiCallDelete } from '../../utils/authInterceptor';
import './AppDashboard.css'

const AppDashboard = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getList()
    // return () => {
    //   cleanup
    // };
  }, [])

  const getList = () => {
    apiCallGet('/article/mine').then((response) => {
      console.log('response', response.data.data);
      setList(response.data.data)
    })
      .catch((error) => {
        console.log(error);
      });
  }

  const rateArt = (id, action) => {
    console.log(typeof (id), typeof (action))
    apiCallPut(`/article/rate/${id}/${action}`).then((response) => {
      console.log('response', response.data.data);
      getList();
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <main role="main" className="app-dashboard container jumbotron">
      <Header />
      <ArticleListWrapper list={list} rateArt={rateArt} />
    </main>
  );
}

export default AppDashboard;
