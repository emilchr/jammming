import React from 'react';
import './Track.css';

export class Track extends React.Component {
  render() {
    const renderAction = () => {
      let isRemoval = false; // isRemoval is connected to what??? step 27
      if (isRemoval) {
        return <button className="Track-action">-</button>
      } else {
        return <button className="Track-action">+</button>
      }
    }
    return (
      <div className="Track">
          <div className="Track-information">
            <h3>{this.props.track.name}</h3>
            <p>{this.props.track.artist} | {this.props.track.album} </p>
          </div>
          <button className="Track-action">{renderAction()}</button>
      </div>
    )
  }
}
