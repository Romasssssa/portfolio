function greet(){
    alert("Hi! Welcome to my website");
  }
  
  function getName(){
    let name = prompt("What's your name?");
    alert("Nice to meet you, " + name);
  }

  function func1(){
    alert("my final seminar will be here soon!!");
  }

  function func2(){
    alert("my ethics assignments will be here soon!!");
  }

  function func3(){
    alert("all my other assignments will be here soon!!");
  }

  function func4(){
    alert("all my other assignments will be here soon!!");
  }


  function func5(){
    alert(" all my other assignments will be here soon!!");
  }

  function func6(){
    alert(" all my other assignments will be here soon!!");
  }

  function func7(){
    alert(" all my other assignments will be here soon");
  }

  function func8(){
    alert(" all my other assignments will be here soon!!");
  }

  function func9(){
    alert(" all my other assignments will be here soon");
  }

  function func10(){
    alert("give some feedback");
  }

  function whileSumsThrees(){
    let sum= 0;
    let i=0;
    while (i < 1000) {
      sum+=i;
      i = i + 3;
    }
    console.log(sum);
  }
  
function encrypt (){ 
let plaintext = prompt ("enter your message ");
let ciphertext = "";
let firstletter= "";
plaintext = plaintext.split("");
for (let i = 0 ; i< plaintext.length; i = i + 1){
 firstletter=(plaintext[i][0]).repeat(2);
  
  ciphertext += "oogey" + (plaintext[i]).slice(1,-1) + firstletter + "YOLO";
}

document.getElementById("encrypted").innerHTML=ciphertext;
// var str = document.getElementById("encrypted").innerHTML=txt;
alert("here is your encrypted message  " + ciphertext)
}

 function decrypt(){
   let ciphertext = prompt ("Enter your encrypted message here ");
   let plaintext = "";
  ciphertext = ciphertext.split("");
  for (let i = 0 ; i< plaintext.length; i = i + 1){
    let firstletter = (ciphertext [i]).slice(0,-2).repeat();
    let sentence= (ciphertext[i]).slice(0).split();
    let replace = ("YOLO", "");
    plaintext += firstletter + (ciphertext[i]).slice(0) + sentence + "" + replace;
    
  }
   
alert("here is your decrypted message" + plaintext)
  document.getElementById("decrypted").innerHTML=plaintext;
  }
