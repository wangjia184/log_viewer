import React from 'react'



class IndicesUI extends React.Component {
  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');
    return <h2>IndicesUI</h2>
  }
}

console.log('IndicesUI is loaded');

module.exports = IndicesUI;