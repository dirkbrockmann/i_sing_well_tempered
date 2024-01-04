// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		dt:1,
		N:100,
		local_radius:0.0,
	
		temperature: {
			range:[0,5],
			default:0
		},
		magnetic_field: {
			range:[-0.1,0.1],
			default:0
		},
		local_average: {
			default:false
		}
}

