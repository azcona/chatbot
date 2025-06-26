import React from "react";
import Landing from "./components/Landing/Landing";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <>
      <Landing />
      <Chat visible={true} />
    </>
  );
}

export default App;
