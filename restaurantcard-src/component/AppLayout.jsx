import React, { Component } from 'react'

export class AppLayout extends Component {
  render() {
    return (
      <div className='app-layout'>
        {this.props.children}
      </div>
    )
  }
}

export default AppLayout
