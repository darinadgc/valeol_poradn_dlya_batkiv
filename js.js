let burger = document.querySelector(".header__burger"),
nav = document.querySelector(".nav"),
body = document.querySelector("body");
	

	  burger.addEventListener("click", function(event) {
	    burger.classList.toggle("active");
	    nav.classList.toggle("active");
	    body.classList.toggle("lock");
	     
	  });
	



	
	