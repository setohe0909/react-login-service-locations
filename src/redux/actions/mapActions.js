import loadGoogleMapsAPI from 'load-google-maps-api'

function receiveData(json) {
	return{
		type: 'ADD_MAP',
		payload: json
	}
};

function error(){
	return{
		type: 'ERR_MAP',
	}
}

export function Maps(loc) {
	return function(dispatch) {
		const gooMap = loadGoogleMapsAPI({
      key:'AIzaSyAwTL0xxa1AofBP27UStLV8uV_-TQUElU0',
      language: 'es'})
		.then( (googleMaps) => {
			new googleMaps.DistanceMatrixService().getDistanceMatrix({
    			origins: [loc.origen],
    			destinations:[loc.destinations] ,
    			travelMode: 'DRIVING',
  			}, (dr,de) => {
          dispatch(receiveData(dr))
        }).catch((err)=>{
  				dispatch(error())
  			});
			}).catch((err) => {
  			dispatch(error())
		})
	}
};
