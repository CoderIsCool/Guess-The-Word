Jason = localStorage.getItem("player-1");
Piper = localStorage.getItem("player-2");

Jason_score = 0;
Piper_score = 0;

document.getElementById("Jason").innerHTML = Jason + " : ";
document.getElementById("Piper").innerHTML = Piper + " : ";

document.getElementById("Jason_score").innerHTML = Jason_score;
document.getElementById("Piper_score").innerHTML = Piper_score;

document.getElementById("Question_turn").innerHTML = "Question turn : " + Jason;
document.getElementById("Answer_turn").innerHTML = "Answer turn : " + Piper;

function send()
{
word = document.getElementById("Hi").value;
Lword = word.toLowerCase();
console.log(Lword);

Character_1 = Lword.charAt(1);
console.log(Character_1);

length = Math.floor(Lword.length/2);
Character_2 = Lword.charAt(length);
console.log(Character_2);

Minus = Lword.length - 1;
Character_3 = Lword.charAt(Minus);
console.log(Character_3);

Remove_1 = Lword.replace(Character_1, "_");
Remove_2 = Remove_1.replace(Character_2, "_");
Remove_3 = Remove_2.replace(Character_3, "_");
console.log(Remove_3);

question_word = "<h4 id='word_display'>Q. "+Remove_3+"</h4>";
Pranati = "<br> A. <input type='text' id='Prerna'>";
Kanika = "<br> <br> <button class='btn btn-info' onclick='check()'> Check </button>";
Row = question_word + Pranati + Kanika;
document.getElementById("output").innerHTML = Row;
document.getElementById("Hi").value = "";

}
Q_turn = "P-1";
A_turn = "P-2";

function check()
{
    HaPo = document.getElementById("Prerna").value;
    PeJa = HaPo.toLowerCase();
    console.log("Answer in lowercase" + PeJa); 
     if(PeJa == Lword)
     {
         if(A_turn == "P-1")
         {
             Jason_score = Jason_score +2;
            document.getElementById("Jason_score").innerHTML = Jason_score;
         }
         else
         {
            Piper_score = Piper_score +2;
            document.getElementById("Piper_score").innerHTML = Piper_score;  
         }
     }
     if(Q_turn =="P-1")
     {
         Q_turn = "P-2"
         document.getElementById("Question_turn").innerHTML = "Question Turn: "+Piper;

     }
     else{
        Q_turn = "P-1"
        document.getElementById("Question_turn").innerHTML = "Question Turn: "+Jason; 
     }
     if(A_turn =="P-1")
     {
         A_turn = "P-2"
         document.getElementById("Answer_turn").innerHTML = "Answer Turn: "+Piper;

     }
     else{
        A_turn = "P-1"
        document.getElementById("Answer_turn").innerHTML = "Answer Turn: "+Jason; 
     }
     document.getElementById("output").innerHTML = "";
}
