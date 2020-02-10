import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CreateNote from "./components/CreateNote";
import NotesList from "./components/NotesList";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navigation />

      <Route exact path="/" component={NotesList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
