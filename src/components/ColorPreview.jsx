import React from "react";

class ColorPreview extends React.Component {
  render() {
    return (
      <div className="colorPreview">
        Color selected: {this.props.color.name}
      </div>
    );
  }
}

export default ColorPreview;
