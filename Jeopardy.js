var points = 0;
var question = "";

function home(){
    document.getElementById("column1").style.display='flex';
    document.getElementById("column2").style.display='flex';
    document.getElementById("column3").style.display='flex';
    document.getElementById("column4").style.display='flex';
    document.getElementById("column5").style.display='flex';
    document.getElementById("column6").style.display='flex';
    document.getElementById("home").style.display="none";
    document.getElementById("questionNum").style.display="none"
    document.getElementById("question").style.display="none"
    document.getElementById("team1Button").style.display="none";
    document.getElementById("team2Button").style.display="none";
    document.getElementById("team3Button").style.display="none";
    document.getElementById("nooneButton").style.display="none";
}

function hide(){
    document.getElementById("column1").style.display="none";
    document.getElementById("column2").style.display="none";
    document.getElementById("column3").style.display="none";
    document.getElementById("column4").style.display="none";
    document.getElementById("column5").style.display="none";
    document.getElementById("column6").style.display="none";
}

function showPoints(){
    document.getElementById("home").style.display="block";
    document.getElementById("questionNum").style.display="block"
    document.getElementById("question").style.display="block"
    document.getElementById("team1Button").style.display="block";
    document.getElementById("team2Button").style.display="block";
    document.getElementById("team3Button").style.display="block";
    document.getElementById("nooneButton").style.display="block";
}

function awardPoints1(){
    var team1 = document.getElementById("team1PointsScore").innerHTML;
    team1 = parseInt(team1);
    team1 = team1 + points;
    document.getElementById("team1PointsScore").innerHTML = team1;
    home();
}

function awardPoints2(){
    var team2 = document.getElementById("team2PointsScore").innerHTML;
    team2 = parseInt(team2);
    team2 = team2 + points;
    document.getElementById("team2PointsScore").innerHTML = team2;
    home();
}

function awardPoints3(){
    var team3 = document.getElementById("team3PointsScore").innerHTML;
    team3 = parseInt(team3);
    team3 = team3 + points;
    document.getElementById("team3PointsScore").innerHTML = team3;
    home();
}

function button11(){
    hide();
    document.getElementById("button11").style.color="purple";
    showPoints();
    points = 200;
    question = "Filler but works";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button12(){
    hide();
    document.getElementById("button12").style.color="purple";
    showPoints();
    points = 200;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button13(){
    hide();
    document.getElementById("button13").style.color="purple";
    showPoints();
    points = 200;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button14(){
    hide();
    document.getElementById("button14").style.color="purple";
    showPoints();
    points = 200;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button15(){
    hide();
    document.getElementById("button15").style.color="purple";
    showPoints();
    points = 200;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button16(){
    hide();
    document.getElementById("button16").style.color="purple";
    showPoints();
    points = 200;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button21(){
    hide();
    document.getElementById("button21").style.color="purple";
    showPoints();
    points = 400;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button22(){
    hide();
    document.getElementById("button22").style.color="purple";
    showPoints();
    points = 400;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button23(){
    hide();
    document.getElementById("button23").style.color="purple";
    showPoints();
    points = 400;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button24(){
    hide();
    document.getElementById("button24").style.color="purple";
    showPoints();
    points = 400;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button25(){
    hide();
    document.getElementById("button25").style.color="purple";
    showPoints();
    points = 400;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button26(){
    hide();
    document.getElementById("button26").style.color="purple";
    showPoints();
    points = 400;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button31(){
    hide();
    document.getElementById("button31").style.color="purple";
    showPoints();
    points = 600;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button32(){
    hide();
    document.getElementById("button32").style.color="purple";
    showPoints();
    points = 600;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button33(){
    hide();
    document.getElementById("button33").style.color="purple";
    showPoints();
    points = 600;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button34(){
    hide();
    document.getElementById("button34").style.color="purple";
    showPoints();
    points = 600;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button35(){
    hide();
    document.getElementById("button35").style.color="purple";
    showPoints();
    points = 600;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button36(){
    hide();
    document.getElementById("button36").style.color="purple";
    showPoints();
    points = 600;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button41(){
    hide();
    document.getElementById("button41").style.color="purple";
    showPoints();
    points = 800;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button42(){
    hide();
    document.getElementById("button42").style.color="purple";
    showPoints();
    points = 800;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button43(){
    hide();
    document.getElementById("button43").style.color="purple";
    showPoints();
    points = 800;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button44(){
    hide();
    document.getElementById("button44").style.color="purple";
    showPoints();
    points = 800;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button45(){
    hide();
    document.getElementById("button45").style.color="purple";
    showPoints();
    points = 800;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button46(){
    hide();
    document.getElementById("button46").style.color="purple";
    showPoints();
    points = 800;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button51(){
    hide();
    document.getElementById("button51").style.color="purple";
    showPoints();
    points = 1000;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button52(){
    hide();
    document.getElementById("button52").style.color="purple";
    showPoints();
    points = 1000;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button53(){
    hide();
    document.getElementById("button53").style.color="purple";
    showPoints();
    points = 1000;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button54(){
    hide();
    document.getElementById("button54").style.color="purple";
    showPoints();
    points = 1000;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button55(){
    hide();
    document.getElementById("button55").style.color="purple";
    showPoints();
    points = 1000;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button56(){
    hide();
    document.getElementById("button56").style.color="purple";
    showPoints();
    points = 1000;
    question = "Filler";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}