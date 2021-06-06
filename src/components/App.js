import React from "react";
import ColorContex from "../contexts/ColorContex";
import { LanguageStore } from "../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContex.Provider value="red">
            <UserCreate />
          </ColorContex.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
