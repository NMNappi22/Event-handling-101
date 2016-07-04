window.onload = initiateProgram;

function initiateProgram(){
	//first button
	var clickLinkOne = document.getElementById('otherClicker');
	clickLinkOne.addEventListener('click', handleClicker);
	var inc = 0
	function handleClicker(evt){
  		inc = inc + 1;
    	document.getElementById("click").innerHTML = ("You clicked me " + inc + " times");  
	}

	//second button
	var clickerLink = document.getElementById('You');
	clickerLink.addEventListener('click', handleClick);

	function handleClick(evt){
  		document.getElementById("clicky").innerHTML = (evt.target.id + " Clicked Me");
	}

	//hoverVanTransform
	var hoverVan = document.getElementById('otherClicker');
	hoverVan.addEventListener('mouseover', handleHover);
	hoverVan.addEventListener('mouseleave', releaseHover);

	var hoverTwo = document.getElementById('You');
	hoverTwo.addEventListener('mouseover', handleHover);
	hoverTwo.addEventListener('mouseleave', releaseHover);

	var hoverThree = document.getElementById('buttonTwo');
	hoverThree.addEventListener('mouseover', handleHover);
	hoverThree.addEventListener('mouseleave', releaseHover);


	function handleHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'hoverStyles';
	}

	function releaseHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'button-1'; 
	}



}