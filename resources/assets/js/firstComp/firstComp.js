import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {

    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div className='home'>
      This is my first react component
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
