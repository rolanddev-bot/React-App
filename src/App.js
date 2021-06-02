import React, { useState } from 'react';
import Picture from "./components/Picture";


function App() {

    const [title, setTitle] = useState("coucou les amis");
    const [show, setShow] = useState(false);

    function handclick() {
        setShow(!show);
    }

    return <div>
        <h1 style={{ fontSize: '4rem', textAlign: 'center' }}>{title}</h1>
        <button className='bg-purple-900 text-white rounded py-2 px-3'
            onClick={handclick} >Show me!</button>

        {show ? <Picture /> : null}

    </div>

}

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { show: false, title: 'coucou les potes' }
//     }


//     componentDidMount() {

//         this.setState({ title: "le composant a bien été modifié !" });

//     }

//     componentWillUpdate() {
//         console.log('element modifié');
//     }


//     render() {


//         return <div>
//             <h1 style={{ fontSize: '4rem', textAlign: 'center' }}>{this.state.title}</h1>
//             <button className='bg-purple-900 text-white rounded py-2 px-3'
//                 onClick={() => this.setState({ show: !this.state.show })} >Show me!</button>

//             <br />
//             <br />

//             <button className='bg-purple-900 text-white rounded py-2 px-3'
//                 onClick={() => this.setState({ show: false })} >Hide me!</button>
//             {
//                 this.state.show ?
//                     <Picture />
//                     : null
//             }

//         </div>
//     }
// }

export default App;