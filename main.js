function solve()
{
	var coefficient_a;
	var coefficient_b;
	var coeffiecient_c;
	var answer;
	var compute;
	var findroot1;
	var findroot2;

    coefficient_a = parseInt(document.querySelector("#n1").value);
    coefficient_b = parseInt(document.querySelector("#n2").value);
    coefficient_c = parseInt(document.querySelector("#n3").value);
    answer =  document.querySelector("#result");

    
    compute = coefficient_b*coefficient_b-(4*coefficient_a*coefficient_c);   

    if(compute < 0)
    {
    	answer.innerHTML = "No Real roots exist";
    }
    else if(compute ==0)
    { 
        findroot1 = (-coefficient_b+Math.sqrt(compute))/(2*coefficient_a);
        findroot2 = (-coefficient_b-Math.sqrt(compute))/(2*coefficient_a);
    	answer.innerHTML = "Real and equal roots.<br>";
    	answer.innerHTML += "X<sub>1</sub>:" +" "+" "+ findroot1 + "<br>";
    	answer.innerHTML += "X<sub>2</sub>:" + " " +" "+findroot2 + "<br>";
    }
    else if(compute>0)
    {
    	findroot1 = (-coefficient_b+Math.sqrt(compute))/(2*coefficient_a);
        findroot2 = (-coefficient_b-Math.sqrt(compute))/(2*coefficient_a);
    	answer.innerHTML = "Real and distinct roots.<br>";
    	answer.innerHTML += "X<sub>1</sub>:" +" "+" "+ findroot1 + "<br>";
    	answer.innerHTML += "X<sub>2</sub>:" + " " +" "+findroot2 + "<br>";
    	
    }
    else
    {
    	answer.innerHTML = "Please enter the coefficients";
    }
}

