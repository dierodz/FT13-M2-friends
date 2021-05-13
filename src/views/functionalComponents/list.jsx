import React from "react";
import { connect } from "react-redux";

import UserItem from "../../components/userItem";

function ListPage({ list }) {
  const [filterList, setFilterList] = React.useState(undefined);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    setFilterList(list);
  }, [list]);

  function handleChange(e) {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      setFilterList(list);
    } else if (Array.isArray(filterList)) {
      const newList = list.filter((user) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterList(newList);
    }
  }

  return (
    <div>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Busca a tu amigo en la lista"
      />
      {filterList && Array.isArray(filterList) ? (
        <ul>
          {filterList.map((user) => (
            <UserItem key={user.id} name={user.name} email={user.email} to={`/functional/user/${user.id}`} />
          ))}
        </ul>
      ) : (
        <h4>Cargando...</h4>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    list: state.list,
  };
}

export default connect(mapStateToProps)(ListPage);
