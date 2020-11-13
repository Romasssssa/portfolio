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
let plaintext = prompt ("enter your message "); //user will be writing down the message they want to encrypt
let ciphertext = " ";
let firstletter= " ";
plaintext = plaintext.split(" ");
for (let i = 0 ; i< plaintext.length; i = i + 1){ //this is the loop
 firstletter=(plaintext[i][0]).repeat(3); // how many times i want the phrase to repeat
  ciphertext += "oogey" + (plaintext[i]).slice(0) + firstletter +  "YOLO "; // how the encryption format is
}
document.getElementById("encrypted").innerHTML=ciphertext;

// var str = document.getElementById("encrypted").innerHTML=txt;
alert("here is your encrypted message  " + ciphertext) // what the user will recive
}

 function decrypt(){ // the decryption part
   let ciphertext = prompt ("Enter your encrypted message here "); // recieving decrypted message
   let plaintext = "";
  ciphertext = ciphertext.split(" ");
  for (let i = 0 ; i < ciphertext.length; i = i + 1){ // the decryption loop
    plaintext += (ciphertext[i]).slice(5,-7) + ' ';

  }
  document.getElementById("decrypted").innerHTML=plaintext;
alert("here is your decrypted message " + plaintext); //what the user will recive
  
  }
// YAAYYYY I DID IT (after struggling) BUT IT LOOKS SO COOL
//credits to Joseph and Baasim for helping/editing