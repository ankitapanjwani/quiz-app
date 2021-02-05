import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Form,Button} from 'react-bootstrap';
import './card.css';



class Cards extends Component{
  constructor(props) {
    super();
    this.state = {
      flag: true,
      question:props.quizcardQuestion,
      currentIndex: 0
    };
  }

  prev = (id)=>{
    id = id-1;
    this.setState({currentIndex: id})
  }
  next = (id)=>{
    id = id+1;
    this.setState({currentIndex: id})
  }
render(){
  // console.log(this.state.question);
  const {question, currentIndex} = this.state
  // console.log(question[currentIndex]);
  return (
          <div className="carde">
            <div className="jumbotron">Showing {this.state.question.length} Questions</div>
             {
                 
                 <div className="card-show">
                 <div className="card  mt-5">
               
                  <div className="card-title">Q.{question[currentIndex].quesId+1} {question[currentIndex].quesname}</div><br/>
                   
                   {/* <div>{ques.quesId}</div> */}
                   <button className="btn btn-success m-2">a. {question[currentIndex].options[0]}</button>
                   <button className="btn btn-success m-2">b. {question[currentIndex].options[1]}</button>
                   <button className="btn btn-success m-2">c. {question[currentIndex].options[2]}</button>
                   <button className="btn btn-success m-2">d. {question[currentIndex].options[3]}</button>
                   <div>
                     <button className="btn btn-success m-2" onClick={()=>this.prev(currentIndex)} disabled = {currentIndex===0 ? "disabled": null}>Prev</button>
                     <button className="btn btn-success m-2" onClick={()=>this.next(currentIndex)} disabled = {currentIndex===question.length-1 ? "disabled": null}>Next</button>
                   </div>
                 </div>
                 </div>
             })}
             </div>
         
  );
}
}

export default Cards;




