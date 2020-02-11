import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    content: "",
    date: new Date()
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users");

    this.setState({
      users: res.data.map(user => user.username)
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.title, this.state.content);
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onDateChange = date => {
    this.setState({ date });
  };

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create Note</h4>
          {/* SELECT USER */}
          <div className="form-group">
            <select
              name="userSelected"
              onChange={this.onInputChange}
              className="form-control"
            >
              {this.state.users.map(user => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="form-control"
              required
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="content"
              placeholder="Note"
              className="form-control"
              required
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={this.state.date}
              onChange={this.onDateChange}
            />
          </div>
          <form onSubmit={this.onSubmit}>
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;
