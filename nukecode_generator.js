(()=>{
    document.querySelectorAll(".list-co:nth-child(1) a")
        let historyCode = [ ['No history'],['No history'],['No history']]
        let historyCodePlace = document.querySelectorAll('.list-co a');
        // klik
    document.getElementById("click").addEventListener("click", function(event){
        event.preventDefault()
        let code = []
        for (let i = 0; i < 6; i++) {
            code.push(Math.ceil((Math.random())*10)-1)
            if(code.length >= 6){
                console.log(code.join(''));
                if (code.length !== 6) {
                    code.pop()
                }
                    historyCode.pop()
                    historyCode.unshift(code)
                break;
            }
        }
        document.getElementById("code").innerHTML = code.join('')

        historyCodePlace.forEach((e,i) => {
            e.innerHTML = historyCode[i].join('')
        });
      });
})()