import React, { Component } from 'react'

export class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentTime: 0
        }
    }
    handleClick = () => {
    this.today = new Date()
    this.time = this.today.getHours() + ':' + this.today.getMinutes() + ':' + this.today.getSeconds();
    this.setState({currentTime: this.time});
    };
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Here</button>
                <h3>You Clicked at:{this.state.currentTime}</h3>
            </div>
        )
    }
}

export default Sidebar
