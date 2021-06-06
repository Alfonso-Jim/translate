import React from "react";
import ColorContex from "../contexts/ColorContex";
import LanguageContext from "../contexts/LanguageContext";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <ColorContex.Provider value="red">
            <UserCreate />
          </ColorContex.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
