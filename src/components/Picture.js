import React, { Component } from 'react'

export default class Picture extends Component {
 
  constructor(props){
      super(props);
      this.state={t:0}
  }

    componentWillUnmount(){
       clearInterval(this.state.t);
        console.log('composant image');
     
    }

    componentDidMount(){
    this.setState({
        t:setInterval(() => {
         
        console.log('is gere..........')
        }, 1000)
    })
      
    }

    render() {
        return (
            <img className="w-40 mx-auto" src="logo512.png"></img>
        )
    }
}
