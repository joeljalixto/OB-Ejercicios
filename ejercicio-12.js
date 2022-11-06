function fibonacci(num){
	let a = 1;
	let b = 0;
for(let i = 0; i<num;i++){
	c = (a+i) + (b-i)
    a = b
    b = c        
	console.log(c);
				
	}
}
fibonacci(6)