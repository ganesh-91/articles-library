import React, { useEffect, useState } from 'react';

import ArticleListWrapper from './ArticleListWrapper';
import Header from './Header';
import { apiCallGet } from '../../utils/authInterceptor';
import './AppDashboard.css'

const AppDashboard = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    // apiCallPost();
    // console.log('apiCallPost()', apiCallGet())
    apiCallGet('/article/mine').then((response) => {
      console.log(response);
      // return response;
      setList(response.data)
    })
      .catch((error) => {
        console.log(error);
        // return error;
      });
    // return () => {
    //   cleanup
    // };
  }, [])

  return (
    <main role="main" className="app-dashboard container jumbotron">
      <Header />
      <ArticleListWrapper list={list} />
    </main>
  );
}

export default AppDashboard;
