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
      <div className='grid'>
      <h1 className='text--center title'>Calculate 🤖</h1>
          <div  className='form login'>
            <div class='form__field'>
              <label for='login__username'>
                <svg class='icon'>
                      <use link='http://www.w3.org/1999/xlink' href='#user'></use>
                </svg>
                  <span class='hidden'>Email</span>
              </label>
              <input className='form-control' 
                      type='text' 
                      placeholder='Origin Address' 
                      name='origen' 
                      value={ this.state.origen } 
                      onChange={ this.handleChange }/>
            </div>
            <div class='form__field'>
              <label for='login__username'>
                <svg class='icon'>
                      <use link='http://www.w3.org/1999/xlink' href='#user'></use>
                </svg>
                  <span class='hidden'>Email</span>
              </label>
              <input className='form-control' 
                    type='text' 
                    placeholder='Destination address' 
                    name='destino' 
                    value={ this.state.destino } 
                    onChange={ this.handleChange }/>
            </div>
        </div>
        <div class='form__field'>
          <button className='send' 
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
