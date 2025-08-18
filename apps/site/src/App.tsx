import { greeting } from "@after6ix/core";

function App() {
  return (
    <div className="app">
      <h1>{greeting("After6ix Site")}</h1>
      <p>Welcome to the After6ix website!</p>
    </div>
  );
}

export default App;