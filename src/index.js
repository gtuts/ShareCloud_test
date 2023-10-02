import React, { Component } from "react";
import TaskTable from "./components/TaskTable";
import DateTable from "./components/DateTable";
import data from "./data/tasks.json";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskTable data={data} />
        <DateTable />
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
