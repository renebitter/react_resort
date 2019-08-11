import React, { Component } from 'react'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return <nav className="navbar">Navbar</nav>        
    }
}
