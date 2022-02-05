function displayAnswer() {
    var ans = document.getansmentsByTagName('input');
    score = 0;
      
    for(i = 0; i < ans.length; i++) {
          
        if(ans[i].checked) {
          
            if(ans[i].value == 1){
                score +=10;

            }

        }
    }
    alert(score / 40 * 100 + '%')
}