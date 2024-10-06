   
                  //ClearScreen Function:
   function ClearScreen(){
      document.querySelector("#result").value = "";               //clear Input field:
	  document.querySelector(".ShowResult").innerText = "result";     //clear show result div:   
	  document.querySelector(".ShowResult").style.color="Fuchsia";							
   }
   
   document.querySelector("#result").style.fontSize="19px";              // font-size of input value      
				// Get User Input Function 
   
   function remove_oneByone(){
	   let Element = document.querySelector("#result");
	   let Ary = Element.value.split("");
	   Ary.pop();
	   Element.value = Ary.join("")
   }
   
   function Display(data){
	    if(data == "square"){
			let x = document.querySelector("#result").value
		    let sqr = x*x;
			document.querySelector(".ShowResult").innerText = sqr;
	    }else if(data == "cube"){
			let y = document.querySelector("#result").value
		    let cube = y*y*y;
			document.querySelector(".ShowResult").innerText = cube;
	    }else{
			let showData = document.querySelector("#result");
	        showData.value  =  showData.value + data;
		}
   }
   
                  //value Calculation Function:
				   
 function Calculation(){
	   let calculateStr = document.querySelector("#result").value;
	   if(calculateStr.length == 0){
			console.warn("Empty value");
	   }else if( calculateStr[0] == "*" || calculateStr[0] == "/" || calculateStr[0] == "%" ){	
			document.querySelector(".ShowResult").style.color="red";						
			document.querySelector(".ShowResult").innerText = "Math error!";
	   }else if(calculateStr.endsWith("+") || calculateStr.endsWith("-") || calculateStr.endsWith("/") || calculateStr.endsWith("*") || calculateStr.endsWith("%") ){
			document.querySelector(".ShowResult").style.color="red";						
			document.querySelector(".ShowResult").innerText = "something is missing!";	
	   }else{ 
	          //let x = Number(calculateStr);
              //console.log(Number(calculateStr));			  
			  let result = eval(calculateStr);
	   	      document.querySelector(".ShowResult").innerText = result;
	   }
  } 
  
  
  
function trignometericFunc(givenFunc){
	  let input_Element = document.querySelector("#result");
	  let display_Result = document.querySelector(".ShowResult");
	  
	  let angle = input_Element.value;
	  
		if(givenFunc == "sin"){
		     input_Element.value = "sin("+angle+")";
		     let radain = angle * Math.PI/180;                       //convert angle Degree into radain:
		     display_Result.innerText = Math.sin(radain);
		   
	    }else if(givenFunc == "cos"){
		     input_Element.value = "cos("+angle+")";                  //convert angle Degree into radain:   
		     display_Result.innerText = Math.cos( angle * Math.PI/180 ).toFixed(8);
	    }else if(givenFunc == "tan"){
		     input_Element.value = "tan("+angle+")";                  //convert angle Degree into radain:
		     display_Result.innerText = Math.tan( angle * Math.PI/180 ).toFixed(8); 
	    }else if(givenFunc == "log"){
		     input_Element.value = "log("+angle+")";
			 display_Result.innerText= Math.log(angle);
		}else if(givenFunc == "logInverse"){
			 input_Element.value = "logIn("+angle+")"; 
			 display_Result.innerText=   1 / Math.log(angle);
		}else if(givenFunc == "PI"){
			 input_Element.value = "Value of PI";
			 display_Result.innerText= Math.PI;
		}else if(givenFunc == "squreRoot"){
			 input_Element.value = "squreRoot("+angle+")";
			 display_Result.innerText= Math.sqrt(angle);
		}	
       		
  }
  
  function reFreshWindow(){
	  location.reload();
  }