function displayRadioValue() {
    document.getElementById("result").innerHTML = "";
    var ele = document.getElementsByTagName('input');
    score = 0;
      
    for(i = 0; i < ele.length; i++) {
          
        if(ele[i].checked) {
          
            if(ele[i].value == 1){
                score +=10;

            }

        }
    }
    document.getElementById("result").innerHTML = score;
}