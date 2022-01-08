function back()
{
    window.location = "activity_1.html";

}
function getScore()
{
    var score = localStorage.getItem("Score");
    document.getElementById("update").innerHTML = "<h1>score : "+score +"</h1>";

}