//Імпортуємо батьківський клас Component з бібліотеки React
import { Component } from 'react'; 
// import User from '../User';
import Showdata from '../Showdata';

//Виконуємо успадкування нового класу-компоненту 
//від батьківського класу Component 
class App extends Component{
    //Задаємо дані за допомогою батьківського класа
    constructor(){
        //Викликаємо конструктор батьківського класа
        super();
        this.state = {
            name: "Nina",
            age: 19
        }
        //Змінюємо контекст this для методу nextUser 
        this.nextUser = this.nextUser.bind(this);
        
        console.log("Constructor");
    }
    //Описуємо метод відображення компонента
    //за допомогою інструкції render
    // render(){
    //     return (<User name={this.state.name} 
    //                   age={this.state.age}/>);
    // }
    // render(){
    //     return (
    //         <Showdata name={this.state.name} 
    //                   age={this.state.age}>
    //             Main information
    //         </Showdata>
    //     )
    // }
    componentDidMount(){
        console.log("componentDidMount");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true;
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    nextUser(){
        //Так не правильно
        // this.state.name = "Oleh";
        // this.state.age = 20;

        //А так правильно
        this.setState({
            name: "Oleh",
            age: 20
        })

    }
    //А стрілочна функція зберігає необхідний контекст
    previouseUser = () =>{
        this.setState({
            name: "Nina",
            age: 19
        })
    }

    render(){
        console.log("render");
        return (
            <Showdata name={this.state.name} 
                      age={this.state.age}>
                Main information<br/>
                <button onClick={this.previouseUser}>Previouse user</button>
                <button onClick={this.nextUser}>Next user</button>    
            </Showdata>
        )
    }
}

export default App;