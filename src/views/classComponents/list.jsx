import React, { Component } from "react";
import { connect } from "react-redux";

import UserItem from "../../components/userItem";

export class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterList: undefined,
      search: "",
    };

    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      filterList: this.props.list,
    });
  }

  handleChange = (e) => {
    let filterList;

    if (e.target.value.length === 0) {
      filterList = this.props.list;
    } else if (Array.isArray(this.state.filterList)) {
      filterList = this.props.list.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }

    this.setState({
      search: e.target.value,
      filterList,
    });
  }

  // handleChange(e) {
  //   let filterList;

  //   if (e.target.value.length === 0) {
  //     filterList = this.props.list;
  //   } else if (Array.isArray(this.state.filterList)) {
  //     filterList = this.props.list.filter((user) =>
  //       user.name.toLowerCase().includes(e.target.value.toLowerCase())
  //     );
  //   }

  //   this.setState({
  //     search: e.target.value,
  //     filterList,
  //   });
  // }

  render() {
    return (
      <div>
        <input
          value={this.state.search}
          onChange={this.handleChange}
          placeholder="Busca a tu amigo en la lista"
        />
        {this.state.filterList && Array.isArray(this.state.filterList) ? (
          <ul>
            {this.state.filterList.map((user) => (
              <UserItem key={user.id} name={user.name} email={user.email} to={`/class/user/${user.id}`} />
            ))}
          </ul>
        ) : (
          <h4>Cargando...</h4>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

export default connect(mapStateToProps)(ListPage);
