function login() {
    player_1_name=document.getElementById("player1_input").value;
    player_2_name=document.getElementById("player2_input").value;
localStorage.setItem("key_1", player_1_name);
localStorage.setItem("key_2", player_2_name);
window.location="game.html";
}