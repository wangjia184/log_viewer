import React from 'react'
import { Link } from 'react-router'

class SettingUI extends React.Component {
  render() {
    return <Link to={`/indices`} activeClassName="active">Go to /indices</Link>
  }
};


module.exports = SettingUI;