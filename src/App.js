import React from "react";
import marked from "marked";

let m = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Sample`,
    };
    this.change = this.change.bind(this);
  }

  change(e) {
    this.state.input = e.target.value;
    m = marked(this.state.input);
    m = m.replace(/\\r\\n/g, "<br />");
    pdisplay();
    console.log(this.state.input);
  }

  componentDidMount() {
    m = marked(this.state.input);
    m = m.replace(/\\r\\n/g, "<br />");
    pdisplay();
  }

  render() {
    return (
      <textarea id="editor" type="text" onChange={this.change}>
        {this.state.input}
      </textarea>
    );
  }
}

function pdisplay() {
  document.getElementById("preview").innerHTML = m;
}

export default App;
