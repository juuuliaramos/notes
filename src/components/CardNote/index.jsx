import { Component } from "react";
import "./style.css";

export default class CardNote extends Component {
  render() {
    return (
      <section id="background-notes">
        {Array.of("Trabalho", "Trabalho", "Estudo").map((categorie, index) => {
          return (
            <section key={index} id="card-field">
              <header>
                <h3>Title</h3>
              </header>
              <p id="p-note-content"> Your note</p>
            </section>
          );
        })}
      </section>
    );
  }
}
