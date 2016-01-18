import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, NotFoundRoute, hashHistory } from 'react-router'



const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./routes/setting/view'),
    childRoutes: [
      require('./routes/indices')
    ]
  }]
};



ReactDOM.render((
  <Router history={hashHistory} routes={rootRoute} />
), document.getElementById('app-container'));