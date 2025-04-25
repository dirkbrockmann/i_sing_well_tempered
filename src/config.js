// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 360,
		slider_show: true,
		slider_gap : 1.5,
		slider_anchor: {x:1,y:8},
		slider_girth: 10,
		slider_knob:14,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:5},
		resetbutton_anchor:{x:2,y:5},
		fieldbutton_anchor:{x:11,y:9.5},
		fieldbutton_size:25,
		toggle_anchor:{x:1.5,y:11},
		toggle_label_position:"right"
	},
	simulation: {
		delay:10
	},
	plot:{
		energy_anchor:{x:6,y:3},
		magnetization_anchor:{x:6,y:6},
		width:200,
		height:80,
		energy_ylabel:"energy",
		magnetization_ylabel:"magnetization",
		x_label:"time",
		x_range:1000,
	}
}