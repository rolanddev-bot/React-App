import React from "react";
import Picture from "./components/Picture";

// function App({ title }) {
//     return <h1 className="text-center text-blue-500 text-4xl">{title}</h1>;

// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, title:'coucou les potes' }
    }


    componentDidMount(){
      
        this.setState({title:"le composant a bien été modifié !"});
       
    }

    componentWillUpdate(){
        console.log('element modifié');
    }

    
    render() {

        
        return <div>
            <h1 style={{fontSize:'4rem',textAlign:'center'}}>{this.state.title}</h1>
            <button className='bg-purple-900 text-white rounded py-2 px-3' 
            onClick={ () => this.setState({ show: !this.state.show}) } >Show me!</button>

            <br />
            <br />

<button className='bg-purple-900 text-white rounded py-2 px-3' 
            onClick={ () => this.setState({show:false}) } >Hide me!</button>
            {
                this.state.show ?
                  <Picture />
                    : null
            }

        </div>
    }
}

export default App;