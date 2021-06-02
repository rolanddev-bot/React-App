import React, { Component, useEffect, useState } from 'react'


export default function Picture() {

    const[timer, setTimer]=useState(null);

    const image=[
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg'
    ];
    function ImageComponent(){
        return image.map((name)=>{
            return (
                
            <img className="w-40 mx-auto" src={name}></img>
            )
        })
    }

    useEffect(()=>{
        setTimer(setInterval(()=>{
            console.log('timer monnté');
        },5000));

        return ()=> clearInterval(setTimer)
        
    },[])

    return (
        <div className=" flex items-center justify-between">
           <ImageComponent />
        </div>
    )
}

// export default class Picture extends Component {
 
//   constructor(props){
//       super(props);
//       this.state={t:0}
//   }

//     componentWillUnmount(){
//        clearInterval(this.state.t);
//         console.log('composant image');
     
//     }

//     componentDidMount(){
//     this.setState({
//         t:setInterval(() => {
         
//         console.log('is gere..........')
//         }, 1000)
//     })
      
//     }

//     render() {
//         return (
//             <img className="w-40 mx-auto" src="logo512.png"></img>
//         )
//     }
// }
