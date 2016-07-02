window.onload = initiateProgram;

function initiateProgram(){
	//first button
	var clickLinkOne = document.getElementById('otherClicker');
	clickLinkOne.addEventListener('click', handleClicker);
	
	function handleClicker(evt){
		
	}

	//second button
	var clickerLink = document.getElementById('clicker');
	clickerLink.addEventListener('click', handleClick);

	function handleClick(evt){
  		console.log(evt.target.id);
	}

	//hoverVanTransform
	var hoverVan = document.getElementById('otherClicker');
	hoverVan.addEventListener('mouseover', handleHover);
	hoverVan.addEventListener('mouseleave', releaseHover);

	var hoverTwo = document.getElementById('clicker');
	hoverTwo.addEventListener('mouseover', handleHover);
	hoverTwo.addEventListener('mouseleave', releaseHover);

	function handleHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'hoverStyles';
	}

	function releaseHover(evt){
		var parent = evt.target.parentElement;
		parent.className = 'button-1'; 
	}

}