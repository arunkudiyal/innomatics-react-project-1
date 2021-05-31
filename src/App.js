import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (

    // JSX 
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks />
    
    </div>

    // <h2>Trying to chcek...</h2> -> Cannot do that
  );
}

export default App;
