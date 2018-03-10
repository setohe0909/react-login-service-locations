import React, { Component } from 'react';

export default class Response extends Component {
  
	constructor(props){
		super(props)
	}

  render() {
    const content = {
      distance : 'Distance',
      time: 'Time',
      error: 'oops! Could exist a error, take a look up the google maps instructions :)',
      welcome: 'Hey! Welcome remember to use well the google maps'
    };

    if (this.props.map.error) {
      return(
        <div>
          <div className='sub-title'>
            { content.error }
          </div>
        </div>
      )
    } else if (this.props.map.auth) {
      return (
        <div>
            <div className='sub-title'>
              <strong>{ content.distance }:</strong> { this.props.map.map.payload.rows[0].elements[0].distance.text }  🚙
            </div>
            <div className='sub-title'>
              <strong>{ content.time }:</strong>  { this.props.map.map.payload.rows[0].elements[0].duration.text } 🕓
            </div>
          </div>
      );
    } else {
      return(
        <div>
          <div className='sub-title'>
            { content.welcome }
          </div>
        </div>
      )
    }
  }
};
