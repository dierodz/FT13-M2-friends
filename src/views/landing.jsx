import React from "react";
import { useHistory } from "react-router";
import Button from "../components/button";

function LandingPage() {
  const history = useHistory();

  return (
    <main>
      <Button
        onClick={() => {
          history.push("/class/list");
        }}
      >
        Mis amigos versión Class
      </Button>
      <Button
        onClick={() => {
          history.push("/functional/list");
        }}
      >
        Mis amigos versión Function
      </Button>
    </main>
  );
}

export default LandingPage;
