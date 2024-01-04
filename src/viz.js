import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import {initialize as plot_init, update as plot_update} from "./plot.js"
import {mean,meanBy} from "lodash-es"
import {sigmoid} from "./utils.js"

var ctx,dL,W,H;

const N = param.N;
const X = d3.scaleLinear().domain([-N,N]);
const Y = d3.scaleLinear().domain([-N,N]).domain([-N,N]);;
const C = d3.scaleLinear([-1, 1], ["black", "white"])



const initialize = (display,controls,grid,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.clearRect(0, 0, W, H);
	agents.forEach(d=>{
		const c = d.cell();
		
		const color = param.local_average.widget.value() ? C(sigmoid(meanBy(d.hood,x=>x.state),10)) : C(d.state);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})

	plot_init(controls,grid)
	


};


const go = (display,controls,config) => {
	
	ctx.clearRect(0, 0, W, H);
	
	agents.forEach(d=>{
		const c = d.cell();
		const color = param.local_average.widget.value() ? C(sigmoid(meanBy(d.hood,x=>x.state),10)) : C(d.state);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})	
	plot_update(controls)
	
}

const update = go;


export {initialize,go,update}
