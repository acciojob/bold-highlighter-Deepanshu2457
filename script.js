function highlight() {
    //Write your code here
let element= document.querySelectorAll('strong');
	for(let t of element){
		t.style.color='green'
	}

}


function return_normal() {
let element= document.querySelectorAll('strong');
	for( t of element){
		t.style.color='black'
	}

    
}
