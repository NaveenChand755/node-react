import React, { Component } from "react";
import Modal from "../Modal/Modal";

const title_URL = "/users";

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      show: false,
      title: "",
      body: "",
    };
  }

  handleShow = () => {
    this.setState({
      show: true,
      title: 'Activity Logs'
    });
  };

  handleClose = (e) => {
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    fetch(title_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data.members,
        });
      });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
          <h1 className="h1">USERS LIST</h1>
        </nav>
        <div className="container p-3 my-3 border">
          {this.state.users &&
            this.state.users.map((members, key) => (
              <div key={key} onClick={this.handleShow}>
                <h2>{members.real_name}</h2>
                  <h6>ID :</h6>{members.id}
                <Modal
                      show={this.state.show}
                      title={this.state.title}
                      data={members.activity_periods}
                      onClick={this.handleClose}
                      onHide={this.handleClose}
                    />
              </div>
            ))}
        </div>
      </div>
    );
  }
}


export default UserPage;
