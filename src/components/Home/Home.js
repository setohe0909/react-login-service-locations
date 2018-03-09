import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Maps } from '../../redux/actions/mapActions';
import Response from '../Response/response'
import withAuthorization from './../withAuthorization';

class HomePage extends Component { 

  constructor(props){
		super(props);
    this.state = {
      origen: '',
      destino: '',
      redirect: false };
    this.handleChange = this.handleChange.bind(this);
  }
  
  add(){
    if (this.props.origen !== '' && this.props.destinations !== '') {
      this.props.dispatch( 
        Maps( {
          origen: this.state.origen,
          destinations:this.state.destino })
      );
        
      this.setState({ value:'' });
    }
  }  

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    const { map } = this.props;

    return (
      <div>
        <div className='add'>
          <input className='form-control' 
                  type='text' 
                  placeholder='Origin Address' 
                  name='origen' 
                  value={ this.state.origen } 
                  onChange={ this.handleChange }/>
          <input className='form-control' 
                type='text' 
                placeholder='Destination address' 
                name='destino' 
                value={ this.state.destino } 
                onChange={ this.handleChange }/>
        </div>
        <div className='add'>
          <button className='btn btn-default' 
            onClick={this.add.bind(this)}>Send!</button>
        </div>
        <div className='add'>
            <Response map={ map } />  
        </div> 
      </div>
     );
   }
};

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  map: state.mapState
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(HomePage);
