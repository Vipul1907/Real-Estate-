import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./CardInform.css";

class Maps extends Component {
  state = {
    selectedPlace: {},
    showingInfoWindow: false,
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      showingInfoWindow: true,
    });
  };

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
    });
  };

  render() {
    return (
      <div className="relative">
        <div className="mapss ">
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
            <InfoWindow
              onClose={this.onInfoWindowClose}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                <p>this is the place so nice</p>
              </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBNCO2ffiIm0ocjRuHTKxSPaZAWOIyC34E",
})(Maps);
