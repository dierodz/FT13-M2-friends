import axios from "axios";
import React, { Component } from "react";

export class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      user: undefined,
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${this.props.id}`)
      .then((response) =>
        this.setState({
          ...this.state,
          user: response.data,
        })
      )
      .catch(() =>
        this.setState({
          ...this.state,
          error: true,
        })
      );
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.user && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1>Usuario</h1>
            <span>{this.state.user.id}</span>
            <span>{this.state.user.name}</span>
            <span>{this.state.user.username}</span>
            <span>{this.state.user.email}</span>
            <span>{this.state.user.address.city}</span>
          </div>
        )}
        {!this.state.user && this.state.error && <h1>Usuario no encontrado</h1>}
        {!this.state.user && !this.state.error && <h1>Cargando...</h1>}
      </div>
    );
  }
}

export default UserPage;
