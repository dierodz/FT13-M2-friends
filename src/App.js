import { Route } from "react-router";
import LandingPage from "./views/landing";
import React from "react";

import ClassListPage from "./views/classComponents/list"
import FunctionalListPage from "./views/functionalComponents/list"

import ClassUserPage from "./views/classComponents/user"
import FunctionalUserPage from "./views/functionalComponents/user"

import { setList } from "./actions";
import { connect } from "react-redux";

function App({ setList }) {

  React.useEffect(() => {
    setList()
  }, [setList]);

  return (
    <div>
      <Route path="/" exact component={LandingPage} />
      {/* Componentes de clase */}
      <Route path="/class/list" exact component={ClassListPage} />
      <Route path="/class/user/:id" exact render={({ match }) => <ClassUserPage id={match.params.id} />} />
      {/* Componentes funcionale */}
      <Route path="/functional/list" exact component={FunctionalListPage} />
      <Route path="/functional/user/:id" exact render={({ match }) => <FunctionalUserPage id={match.params.id} />} />
    </div>
  );
}

export default connect(null, { setList })(App);
