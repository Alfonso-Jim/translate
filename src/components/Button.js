import React from "react";
import ColorContex from "../contexts/ColorContex";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContex.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContex.Consumer>
    );
  }
}

export default Button;
