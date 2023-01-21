function text_fill(){
	let lis = document.getElementsByClassName('first_list');
	for(let i = 0; i < lis.length; i++){
		lis[i].innerHTML = 'Hello I am Oleh';
	}	
}

function text_clear(){
	let lis = document.getElementsByClassName('first_list');
	for(let i = 0; i < lis.length; i++){
		lis[i].innerHTML = '';
	}	
}

function items_count(){
	let lis = document.getElementsByClassName('first_list');
	alert('Items in list = ' + lis.length);
	console.log('Items in list = ' + lis.length);
}

function find_ex_link(){
	let links = document.getElementsByTagName('a');
	for(let i = 0; i < links.length; i++){
		if(links[i].toString().includes('http://') || links[i].toString().includes('ftp://')){
			links[i].classList.add('external-red');
		}
	}
}