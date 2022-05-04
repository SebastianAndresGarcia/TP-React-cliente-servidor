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

export async function guardarInstrumento(ins:instrumento){
	let urlServer = 'http://localhost:3000/crearInstrumento/';
	let method:string= 'POST';
	if(ins.id!==0){
	urlServer = 'http://localhost:3000/actualizarInstrumento/'+ins.id;
	method = 'PUT';
	}
	await fetch(urlServer, { 
		"method": method,
		"body": JSON.stringify(ins),
		"headers": {
			"Content-type": 'application/json'
		},
		mode:'cors'
        
	});
}

export async function eliminarInstrumento(id:number){
	let urlServer = `http://localhost:3000/eliminarInstrumento/${id}/`;
	let method:string= 'DELETE';
	
	await fetch(urlServer, { 
		"method": method,
		
		"headers": {
			"Content-type": 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
		mode:'cors'
        
	});
}
