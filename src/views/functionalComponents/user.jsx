import axios from "axios";
import React from "react";

function UserPage(props) {
  const [user, setUser] = React.useState();
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${props.id}`)
      .then((response) => setUser(response.data))
      .catch(() => setError(true))
  }, [props.id]);

  return (
    <div>
      {user && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Usuario</h1>
          <span>{user.id}</span>
          <span>{user.name}</span>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.address.city}</span>
        </div>
      )}
      {!user && error && <h1>Usuario no encontrado</h1>}
      {!user && !error && <h1>Cargando...</h1>}
    </div>
  );
}

export default UserPage;
