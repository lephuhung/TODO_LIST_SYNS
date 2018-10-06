import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const fakeAuth={
    isAuthenticated:true
}
const PrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => {
  return <Route {...rest} render={props => (
      isAuthenticated
      ? <Component {...props}/>
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
  )}/>
  
}
 export default PrivateRoute;
