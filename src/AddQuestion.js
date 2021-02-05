import React, { Component } from "react";
import "./addquestion.css";
// var questionList = [];
class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      quesname: "",
      option1: "",
      option2: "",
      option3: "",
      option4: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    // const { quesname, option1, option2, option3, option4 } = this.state;
    var tempQuestionList = this.state.questionList;
    tempQuestionList.push({
      quesname: this.state.quesname,
      option1: this.state.option1,
      option2: this.state.option2,
      option3: this.state.option3,
      option4: this.state.option4
    });
    console.log(this.state.questionList);
    this.setState({ questionList: tempQuestionList, quesname: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "" });
    // console.log(
    //   "Question Added: ",
    //   quesname,
    //   option1,
    //   option2,
    //   option3,
    //   option4
    // );
  }
  render() {
    return (
      <div className="container con mt-3">
        <h3 className="heading">Add Questions</h3>

        <form className="card" onSubmit={this.handleSubmit}>
          Question Name:{" "}
          <input
            className="form-control mt-3 mb-2"
            type="text"
            name="quesname"
            value={this.state.quesname}
            onChange={this.handleChange}
            placeholder="Enter Question"
          />
          Option1 :{" "}
          <input
            className="form-control mb-2"
            type="text"
            name="option1"
            value={this.state.option1}
            onChange={this.handleChange}
            placeholder="Enter Option1"
          />
          Option2 :{" "}
          <input
            className="form-control mb-2"
            type="text"
            name="option2"
            value={this.state.option2}
            onChange={this.handleChange}
            placeholder="Enter Option2"
          />
          Option3 :{" "}
          <input
            className="form-control mb-2"
            type="text"
            name="option3"
            value={this.state.option3}
            onChange={this.handleChange}
            placeholder="Enter Option3"
          />
          Option4 :{" "}
          <input
            className="form-control mb-2"
            type="text"
            name="option4"
            value={this.state.option4}
            onChange={this.handleChange}
            placeholder="Enter Option4"
          />
          <button className="btn btn-primary mt-5">Submit</button>
        </form>
        {this.state.questionList.map(ques => {
          return (
            <div>
              <h3 className="mt-5">Questions Added Recently: </h3>
              <h5 className="mt-3"> Q. 1 {ques.quesname}</h5>
              <h6>Option1: {ques.option1}</h6>
              <h6>Option2: {ques.option2}</h6>
              <h6>Option3: {ques.option3}</h6>
              <h6>Option4: {ques.option4}</h6>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AddQuestion;
