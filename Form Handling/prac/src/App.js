import React,{Component} from "react";
import Test from "./Test";
import Adddata from "./Adddata";

class App extends Component {
  state={
    student:[
      {id:1,name:"Raj",age:25}
    ]
  }

  add=(ninja)=>{
    ninja.id=Math.random();
    let students=[...this.state.student,ninja];
    this.setState({
      student:students
    })
  }

  ondelete=(id)=>{
    let students=this.state.student.filter(ite=>{
      return ite.id!==id;
    })
    this.setState({
      student:students
    })
  }

  componentDidMount(){
    console.log("componentDidMount");
  }
  componentDidUpdate(prevpr,prevst){
    console.log("componentDidUpdate");
    console.log(prevpr);
    console.log(prevst);
  }

  render(){
    return (
      <div>
      <Test ondelete={this.ondelete} stu={this.state.student}/>
      <Adddata add={this.add}/>
      </div>
    )
  }
}

export default App;
