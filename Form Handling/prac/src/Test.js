import React, { Component } from "react"
import "./style.css"
class Test extends Component {
    
    render(){
        const {ondelete,stu} = this.props;
        const studentlist=stu.map(ite=>{
            if(ite.age>=25){
            return(
                <div key={ite.id}>
                    <h1>{ite.name}</h1>
                    <h1>{ite.age}</h1>
                    <button className="btn" onClick={()=>{ondelete(ite.id)}}>Delete</button>
                </div>
            )
            }
            else{
                return null;
            }
        })
        return (
            <div>
                {studentlist}
            </div>
        )
    }
}
export default Test;