import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentenceList: [],
      activeItem: {
        id: null,
        text: "",
        text_type: "none",
      },
      editing: false,
    };

    this.fetchSentences = this.fetchSentences.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCookie = this.getCookie.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  componentWillMount() {
    this.fetchSentences();
  }

  fetchSentences() {
    console.log("Fetching...");
    fetch("http://localhost:8000/api/sentence-list/")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          sentenceList: data,
        })
      );
  }

  handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;
    console.log("Name: ", name);
    console.log("Value: ", value);

    this.setState({
      activeItem: {
        ...this.state.activeItem,
        text: value,
        text_type: "none",
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("ITEM:", this.state.activeItem);

    var csrftoken = this.getCookie("csrftoken");
    var url = "http://localhost:8000/api/sentence-create/";

    if (this.state.editing === true) {
      url = `http://localhost:8000/api/sentence-update/${this.state.activeItem.id}/`;
      this.setState({
        editing: false,
      });
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(this.state.activeItem),
    })
      .then((response) => {
        this.fetchSentences();
        this.setState({
          activeItem: {
            id: null,
            title: "",
            text_type: "none",
          },
        });
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }

  startEdit(sentence) {
    this.setState({
      activeItem: sentence,
      editing: true,
    });
  }

  deleteItem(sentence) {
    var csrftoken = this.getCookie("csrftoken");

    fetch(`http://localhost:8000/api/sentence-delete/${sentence.id}/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    }).then((response) => {
      this.fetchSentences();
    });
  }

  render() {
    var sentences = this.state.sentenceList;
    var self = this;

    return (
      <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
            <form onSubmit={this.handleSubmit} id="form">
              <div className="flex-wrapper">
                <div style={{ flex: 6 }}>
                  <input
                    onChange={this.handleChange}
                    className="form-control"
                    id="title"
                    value={this.state.activeItem.text || ""}
                    type="text"
                    name="title"
                    placeholder="Add new sentence..."
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <input
                    id="submit"
                    className="btn btn-warning"
                    type="submit"
                    name="Add"
                  />
                </div>
              </div>
            </form>
          </div>
          <div id="list-wrapper">
            {sentences.map(function (sentence, index) {
              return (
                <div key={index} className="task-wrapper flex-wrapper">
                  <div style={{ flex: 7 }}>
                    <span>{sentence.text}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      onClick={() => self.startEdit(sentence)}
                      className="btn btn-sm btn-outline-info"
                    >
                      Edit
                    </button>
                  </div>
                  <div style={{ flex: 1 }}>
                    <button
                      onClick={() => self.deleteItem(sentence)}
                      className="btn btn-sm btn-outline-dark delete"
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
