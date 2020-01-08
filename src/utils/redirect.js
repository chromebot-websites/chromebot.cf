import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <script>
        const isIE = document.documentMode; if (isIE)
        {window.alert("Your MESSAGE here.")}
      </script>
    );
  }
}

export default App;
