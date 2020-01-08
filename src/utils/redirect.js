import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <script>
        const isIE = document.documentMode; if (isIE)
        {window.alert("You are using internet explorer")}
      </script>
    );
  }
}

export default App;
