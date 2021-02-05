
import Header from './header';
import Navigation from './navbar';
// import Cards from './card';
import AddQuestion from './AddQuestion';
import Footer from './Footer';


function App() {


var questions= [
      {
        quesId: 0,
        quesname: "What is the Capital of France?",
        options: [
            "Newyork", "London","Paris", "Germany",
        ]
      },
      {
        quesId: 1,
        quesname: "What is used in ReactJs to increase performance?",
        options: [
          "Original Dom", "virtual DOM","Both", "None",
        ]
      },
      {
        quesId: 2,
        quesname: "Which of the following below act as the input of a class-based component?",
        options: [
          "Class", "Factory","Render", "Props",
        ]
      },
      {
        quesId: 3,
        quesname: "Default port where webpack-server will run:",
        options: [
          "8080", "3333","3030", "6020",
        ]
      },
      
    ]

  return (

    <div>
         <Navigation></Navigation>
      <Header></Header>
    <AddQuestion quizcardQuestion = {questions}></AddQuestion>
      {/* <Cards quizcardQuestion = {questions}></Cards> */}
      <Footer></Footer>
    
    </div>
  );
}

export default App;
