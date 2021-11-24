import React, { Component } from "react";
import UserService from "../Services/user.services";
import './Home.css'

import CustomChatbot from "./chatbot";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url("./images/laundryhome.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div class="content_abt">
          <div class='console-container'>
                <span id='text'></span>
                <div class='console-underscore' id='console'>&#95;
                </div>
            </div>
          <form class="form-wrapper">
            <input
              type="text"
              id="search"
              placeholder="Search for..."
              required
            />
            <input type="submit" value="go" id="submit" />
          </form>
          {/* <div style={{"display: flex; justify-content: center"}}>
            </div>
            <div style={{"display: flex; justify-content: center"}}> */}
            {/* </div> */}
          <div class="form-popup" id="myForm">
            <form action="#" class="form-container">
              <label for="msg">
                <b>Message</b>
              </label>
              <textarea
                placeholder="Type message.."
                name="msg"
                required
              ></textarea>
            </form>
          </div>
          <CustomChatbot eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}
