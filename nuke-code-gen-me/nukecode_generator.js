(()=>{
    document.querySelectorAll(".list-co:nth-child(1) a")
        let historyCode = [ ['No history'],['No history'],['No history']]
        let historyCodePlace = document.querySelectorAll('.list-co a');
        // klik
    document.getElementById("click").addEventListener("click", (event)=>{
        event.preventDefault()
        let code = []
        for (let i = 0; i < 6; i++) {
            code.push(Math.floor((Math.random())*10))
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
        document.getElementById('booom').setAttribute('href','https://1cak.com/'+code.join(''))
        historyCodePlace.forEach((e,i) => {
            e.innerHTML = historyCode[i].join('')
            e.setAttribute('href','https://1cak.com/'+historyCode[i].join(''))
        });
      });
      document.querySelector('.red_button').addEventListener('click',(event)=>{
          event.setAttribute('href','https://1cak.com/'+document.getElementById('red_code').value)
      })
})()