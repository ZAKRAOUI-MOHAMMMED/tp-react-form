import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      dateNaissance: "",
      ville: "",
      genre: "",
      loisirs: [],
      submitted: false,
    };
  }

  handleGenre = (e) => {
    this.setState({ genre: e.target.value });
  };

  handleLoisirs = (e) => {
    const value = e.target.value;
    if (this.state.loisirs.includes(value)) {
      this.setState((prevState) => ({
        loisirs: prevState.loisirs.filter((item) => item !== value),
      }));
    } else {
      this.setState((prevState) => ({
        loisirs: [...prevState.loisirs, value],
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <form action="#" onSubmit={this.handleSubmit}>
          <label htmlFor="identifiant">L'identifiant</label>
          <input
            type="number"
            name="identifiant"
            id="identifiant"
            value={this.state.id}
            onChange={(e) => {
              this.setState({ id: e.target.value });
            }}
          />
          <br />
          <label htmlFor="motDePasse">Mot de passe</label>
          <input
            type="password"
            name="motDePasse"
            id="motDePasse"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <label htmlFor="dateNaissance">Date de naissance</label>
          <input
            type="date"
            name="dateNaissance"
            id="dateNaissance"
            value={this.state.dateNaissance}
            onChange={(e) => {
              this.setState({ dataNaissance: e.target.value });
            }}
          />
          <br />
          <label htmlFor="ville">Ville</label>
          <select
            name="ville"
            id="ville"
            value={this.state.ville}
            onChange={(e) => {
              this.setState({ ville: e.target.value });
            }}
          >
            <option value="casablanca">Casablanca</option>
            <option value="rabat">Rabat</option>
            <option value="tangier">Tangier</option>
          </select>
          <br />
          <label htmlFor="genre">Genre</label>
          <input
            type="radio"
            name="genre"
            id="genre"
            value="M"
            checked={this.state.genre === "M"}
            onChange={this.handleGenre}
          />
          Homme
          <input
            type="radio"
            name="genre"
            id="genre"
            value="F"
            checked={this.state.genre === "F"}
            onChange={this.handleGenre}
          />
          Femme
          <br />
          <label htmlFor="loisirs">Loisirs</label>
          <input
            type="checkbox"
            name="loisirs"
            value="sport"
            checked={this.state.loisirs.includes("sport")}
            onChange={this.handleLoisirs}
          />
          Sport
          <input
            type="checkbox"
            name="loisirs"
            value="lecture"
            checked={this.state.loisirs.includes("lecture")}
            onChange={this.handleLoisirs}
          />
          Lecture
          <input
            type="checkbox"
            name="loisirs"
            value="musique"
            checked={this.state.loisirs.includes("musique")}
            onChange={this.handleLoisirs}
          />
          Musique
          <br />
          <input type="submit" value="S'inscrire" />
        </form>
        {this.state.submitted && (
          <p>
            Je suis {this.state.id} né le {this.state.dataNaissance} à{" "}
            {this.state.ville} et mes loisirs sont :{this.state.loisirs}
          </p>
        )}
      </>
    );
  }
}
