import React ,{Component} from "react";

class Adddata extends Component{
    state ={
        name:null,
        age:null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleclick = (e) =>{
        e.preventDefault();
        this.props.add(this.state);
       
    }

    render(){
       
        return(
            <div>
            <form onSubmit={this.handleclick}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter Name" onChange={this.handleChange}/>
                <label htmlFor="Age">Age</label>
                <input type="text" id="age" placeholder="Enter Age"  onChange={this.handleChange}/>
                <button type="submit">Add</button>
            </form>
            </div>
        )
    }
}
export default Adddata;