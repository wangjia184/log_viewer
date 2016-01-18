import React from 'react'
import { Link } from 'react-router'

class SettingUI extends React.Component {
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <Link to={`/indices`} activeClassName="active">Click to Indices</Link>
  }
};

module.exports = SettingUI;