import { Component } from "react";
import "./style.css";

export default class FormRegister extends Component {
  render() {
    return (
      <form id="form">
        <h1>Write a note...</h1>
        <input
          id="input-form"
          type="text"
          placeholder="Title"
          className="background-form-elements"
        />
        <textarea
          id="textarea-form"
          rows={15}
          placeholder="write here..."
          className="background-form-elements"
        />
        <button id="btt">Criar Nota</button>
      </form>
    );
  }
}
