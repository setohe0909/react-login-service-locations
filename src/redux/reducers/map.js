const INITIAL_STATE = {
  auth:false,
  error:false
};

const applySetAuthUser = (state, action) => ({
  ...state,
  map: action
});

function mapReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MAP' : {
      state.auth = true;
      return applySetAuthUser(state, action);
    }
    case 'ERR_MAP':{
			return{...state,map:{auth:false,error:true}}
		}
    default : return state;
  }
}

export default mapReducer;
