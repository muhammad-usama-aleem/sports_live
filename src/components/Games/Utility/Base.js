const Base=(a)=>
  {
  	console.log("Base why")
setTimeout(()=>{
	if(window.sessionStorage.getItem(a)!=='false')
	{

	window.sessionStorage.setItem(a,false);
	 window.location.reload();
	}

},3000 )

 }
 export default Base;