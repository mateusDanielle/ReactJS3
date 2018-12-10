import React, { Component } from 'react';
import ReactMapGl from 'react-map-gl';

class App extends Component {
  state = {
    viewport: {
      height: 600,
      latitude: -23.56278,
      longitude: -46.654383,
      zoom: 15,
    },
  };

  render() {
    const { viewport } = this.state;
    return (
      <ReactMapGl
        {...viewport}
        width="100%"
        // height="50%"
        onViewportChange={view => this.setState({ viewport: view })}
        mapboxApiAccessToken="pk.eyJ1IjoibWF0ZXVzZGFuaWVsbGUiLCJhIjoiY2pwaW0xemhuMThuMjNrbWxkYTlqZ244aiJ9.QyzENcI2uUdt9PYiMTKOgg"
      />
    );
  }
}

export default App;
