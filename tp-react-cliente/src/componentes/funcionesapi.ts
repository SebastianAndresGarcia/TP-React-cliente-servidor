import instrumento from "./instrumento";

export async function getInstrumentosJSONFetch(){
	let urlServer = 'http://localhost:3000/instrumentos';
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	console.log(response);
	return await response.json();
}

export async function getInstrumentoXIdFecth(id:number){
	let urlServer = 'http://localhost:3000/instrumentos/'+id;
	let response = await fetch(urlServer, {
		method: 'GET',
        headers: {
			'Content-type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
        mode: 'cors'
	});
	
	return await response.json() as instrumento[];
    
}