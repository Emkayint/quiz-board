function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    score = 0;
      
    for(i = 0; i < ele.length; i++) {  
        if(ele[i].checked) {
          
            if(ele[i].value == 1){
                score +=10;
            }
            resetValue();

        }
        
    }

    const prc = ((score / 50) * 100);
    if(prc >= 80){
        document.getElementById("result").innerHTML =  " You scored " + prc + "% " + "<br>" + "Exelent Performance";
    } else if(79>= prc && prc >= 50){
        document.getElementById("result").innerHTML = " You scored " + prc + "% " + "<br>" + "Very Good";
    } else{
        document.getElementById("result").innerHTML =  " You scored " + prc + "% " + "<br>" + "Realy Bad";
    }
}

function resetValue() {
    var radio = document.querySelector('input[type=radio]:checked');
    radio.checked = false;
}