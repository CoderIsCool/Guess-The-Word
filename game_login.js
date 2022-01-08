function addUser()
{
    Jason = document.getElementById("Annabeth").value;
    Piper = document.getElementById("Percy").value; 
    localStorage.setItem("player-1",Jason);
    localStorage.setItem("player-2",Piper); 
    window.location= "game_page.html";
}