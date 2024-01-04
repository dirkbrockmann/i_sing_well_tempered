import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {M,E} from "./model.js"
import {maxBy,max,meanBy,minBy} from "lodash-es"
import styles from "./styles.module.css"

var T = [0,cfg.plot.x_range];
const yr = [-1,1];

const sc_x = d3.scaleLinear().domain(T).range([0, cfg.plot.width]);
const sc_y = d3.scaleLinear().domain(yr).range([0,-cfg.plot.height]);
const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");

const M_line = d3.line()
    .x(function(d) { return sc_x(d.t); })
    .y(function(d) { return sc_y(d.x); });

const E_line = d3.line()
    .x(function(d) { return sc_x(d.t); })
    .y(function(d) { return sc_y(d.x); });
		

const initialize = (controls,grid) => {
	
	T = [0,cfg.plot.x_range];
	sc_x.domain(T);
	sc_y.domain(yr);

	const mag_pos=grid.position(cfg.plot.magnetization_anchor.x,cfg.plot.magnetization_anchor.y);
	const erg_pos=grid.position(cfg.plot.energy_anchor.x,cfg.plot.energy_anchor.y);
	
	controls.selectAll("."+styles.plot).remove();
	
	const mag_plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+mag_pos.x+","+mag_pos.y+")")
		.attr("id","mag_plot")

	const erg_plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+erg_pos.x+","+erg_pos.y+")")
		.attr("id","erg_plot")
	
	mag_plot.append("g").call(xAxis).attr("class",styles.xaxis)
		.attr("transform","translate("+0+","+(-cfg.plot.height/2)+")");
	
	mag_plot.append("g").call(yAxis).attr("class",styles.yaxis);
	
	erg_plot.append("g").call(xAxis).attr("class",styles.xaxis)
		.attr("transform","translate("+0+","+(-cfg.plot.height/2)+")");
	
	erg_plot.append("g").call(yAxis).attr("class",styles.yaxis);
	
	mag_plot.append("text").text(cfg.plot.x_label)
		.attr("transform","translate("+sc_x((T[1]))+","+(20-cfg.plot.height/2)+")")
		.attr("class",styles.axislabel)

	erg_plot.append("text").text(cfg.plot.x_label)
		.attr("transform","translate("+sc_x((T[1]))+","+(20-cfg.plot.height/2)+")")
		.attr("class",styles.axislabel) 
	
	
	mag_plot.append("text").text("magnetization")
		.attr("transform","translate("+(-20)+","+(sc_y(0))+")rotate(-90)")
		.attr("class",styles.yaxislabel)

	erg_plot.append("text").text("energy")
		.attr("transform","translate("+(-20)+","+(sc_y(0))+")rotate(-90)")
		.attr("class",styles.yaxislabel)

	

	mag_plot.append("path").datum(M).attr("d",M_line)
		.attr("class",styles.curve+" "+styles.magnetization)

	erg_plot.append("path").datum(M).attr("d",E_line)
		.attr("class",styles.curve+" "+styles.energy)
	
}

const update = (controls) => {
	
	if (param.tick>cfg.plot.x_range) {
		T = [minBy(M,'t').t,maxBy(M,'t').t]
	}

	sc_x.domain(T);
		
	controls.select("."+styles.xaxis).call(xAxis)
	controls.select("."+styles.yaxis).call(yAxis)

	controls.select("."+styles.magnetization).datum(M).attr("d",M_line)
	controls.select("."+styles.energy).datum(E).attr("d",E_line)
	
	
}

export {initialize,update}

