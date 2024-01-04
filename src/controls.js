import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"
import cfg from "./config.js"
import parameters from "./parameters.js"
import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"

const variables = get_variables(parameters);
const booleans = get_booleans(parameters);

add_id_label(variables)
add_id_label(booleans)

const bo = toArray(booleans);
const va = toArray(variables);



const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
		);
		

const toggles = map(bo, 
		v => widgets.toggle()
				.id(v.id)
				.label(v.label)
				.labelposition(cfg.widgets.toggle_label_position)
				.value(v.default)					
);
		
add_widget(va,sliders);
add_widget(bo,toggles);


const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])
const reset_field = widgets.button().actions(["rewind"])
		
const buttons = [go,setup,reset,reset_field];

export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	 const tg_pos=grid.position(cfg.widgets.toggle_anchor.x,cfg.widgets.toggle_anchor.y);
			
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
	
 	toggles.forEach((tg,i) => tg.position(tg_pos));
		
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	
	reset_field.position(grid.position(cfg.widgets.fieldbutton_anchor.x,cfg.widgets.fieldbutton_anchor.y))
	.size(cfg.widgets.fieldbutton_size);

	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	
	const slider_zero_pos=grid.position(5.5,9.5)
	controls.append("circle")
		.attr("r",3)
		.attr("cx",slider_zero_pos.x)
		.attr("cy",slider_zero_pos.y)

}

// here are all the exported objects, all the parameters, their associated widgets and the action buttons

export {sliders,go,setup,reset,variables,reset_field,booleans,toggles}


