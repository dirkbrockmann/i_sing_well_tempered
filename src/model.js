import param from "./parameters.js"
import {shuffle,each,range,map,mean,sumBy,unionBy} from "lodash-es"
import {torusdist,grid,l2d,d2l} from "./utils"
import {square} from "lattices"
import cfg from "./config.js"

var E = [];
var M = [];
const N = param.N;
const s = square(N).scale(2*N);
var agents = s.nodes;

const others_inradius = (a,others,R) => others.filter(b=> (torusdist(a,b,2*N) < R) )

const magnetization = (agents) => {
	return sumBy(agents,a=>a.state)/agents.length;
}

const energy = (agents) => {
	return sumBy(agents,a=>-a.state*sumBy(a.neighbors,n=>n.state)/a.neighbors.length)/agents.length
}


const hood = function(k,n,bc="periodic"){
	
	const local_average_hood = grid(21,21);
	const neigh=[];
	each(local_average_hood,z => {

		var j = z[1]
		var i = z[0]
		
		const p = l2d(k,n),
			x = p[0], y = p[1],
			a = x + i, b = y + j;
		if (bc == "dirichlet" ? 
			!(j == 0 && i==0) && a<n && b < n && a>=0 && b>=0 : 
			!(j == 0 && i==0)) {
				neigh.push(n*((b+n)%n)+(a+n)%n);
			}
	})
	
	return neigh;
}

each(agents,(d,i)=>{
	let h = hood(i,2*N+1,"periodic").map(x => agents[x]);
	d.hood = others_inradius(d,h,4) 
})


const initialize = () => {

	param.timer={}; param.tick=0;

	each(agents,a=>{
		Math.random() < 0.5?a.state=-1:a.state=1
	})
		
		
	M = [{t:param.tick,x:magnetization(agents)}];	
	E = [{t:param.tick,x:energy(agents)}];

};

const go  = () => {
	
	param.tick++;
	agents=shuffle(agents);
	
	each(agents,a=>{
		let s = a.state;
		let k = sumBy(a.neighbors,n=>n.state);
		let temp = param.temperature.widget.value();
		let field = param.magnetic_field.widget.value()
		let dE = s*(k+2*field); 
		if(dE <= 0 || Math.random() < Math.exp(-dE/temp) ) {
			a.state = -a.state 		
		}
		
	})

	M.push({t:param.tick,x:magnetization(agents)});	
	E.push({t:param.tick,x:energy(agents)});
	
	if (M.length>cfg.plot.x_range) {
		M.shift()
		E.shift()
	}
	
}

const update = () => {}

export {agents,E,M,initialize,go,update}
