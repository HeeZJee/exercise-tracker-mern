import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateExercise extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
    };
    console.log(newUser);

    axios
      .post("http://localhost:5000/users/add", newUser)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));

    this.setState({
      username: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
