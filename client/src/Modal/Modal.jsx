import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class MyModalComponent extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={() => this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ul>
              {this.props.data.map((item) => (
                <li>
                 <h6> Start Time:</h6> {item.start_time} | <h6>End Time:</h6> {item.end_time}
                </li>
              ))}
            </ul>
          </Modal.Body>

          <Modal.Footer>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
            <Button
              variant="secondary"
              onClick={() => this.props.onClick({ msg: "Modal Closed!" })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MyModalComponent;
