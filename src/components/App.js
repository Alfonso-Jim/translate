import React from "react";
import ColorContex from "../contexts/ColorContex";
import LanguageContext from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
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
