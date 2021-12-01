player1_name= localStorage.getItem("key_1");
player2_name= localStorage.getItem("key_2");

score_1=0;
score_2=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("score1").innerHTML= score_1;
document.getElementById("score2").innerHTML= score_2;

document.getElementById("whos_turn").innerHTML = "Question turn : " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;

function send() {
 input_value = document.getElementById("word_input").value;
 word = input_value.toLowerCase();
 first_char = word.charAt(1);
 mid_numb = Math.floor(word.length/2);
char_2= word.charAt(mid_numb);
numb_3= word.length-1;
char_3= word.charAt(numb_3);
replace1= word.replace(first_char, "_");
replace2= replace1.replace(char_2, "_");
replace3= replace2.replace(char_3, "_");
// <h4 id="h4_1"> Question :  replace3 </h4>
Question = "<h4 id= 'h4_1'> Question: " + replace3 + "</h4>";
Answer= "<br> Answer : <input id= 'input_answer' type='text'>";
button = "<br> <br> <button class='btn btn-danger' onclick='check()'> Check  </button>";
row = Question + Answer + button;
document.getElementById("output").innerHTML= row;
document.getElementById("word_input").value = "";
}

question_turn = "player1";
answer_turn = "player2";
function check() {
answer_val = document.getElementById("input_answer").value;
final_answer = answer_val.toLowerCase();
if (word == final_answer) {
   if (answer_turn == "player1") {
       score_1 = score_1 +1;
       document.getElementById("score1").innerHTML = score_1;
   } else {
       score_2= score_2+1;
       document.getElementById("score2").innerHTML = score_2;
   } 
}

if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("whos_turn").innerHTML = "Question turn : " + player2_name;
} else {
    question_turn = "player1";
    document.getElementById("whos_turn").innerHTML = "Question turn : " + player1_name;
}

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("answer_turn").innerHTML = "Answer turn : " + player2_name;
} else {
    answer_turn = "player1";
    document.getElementById("answer_turn").innerHTML = "Answer turn : " + player1_name;
}



}