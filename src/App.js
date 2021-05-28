import Header from "./components/Header";

function App() {
  return (

    // JSX 
    <div className="App">
      <Header temp='Temp' id={1} title='My Title' />
      <Header id={2} title='New Title' />
      <Header id={3} title='Header Three' />
      <Header id={4} title='Header Four' />
    </div>

    // <h2>Trying to chcek...</h2> -> Cannot do that
  );
}

export default App;
