var points = 0;
var question = "";
var answer = "";
var teampick = "";

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
    document.getElementById("answer").style.display="none";

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
}

function showAnswer(){
    document.getElementById("question").innerHTML = answer;
    document.getElementById("answer").style.display="none"
    document.getElementById("team1Button").style.display="block";
    document.getElementById("team2Button").style.display="block";
    document.getElementById("team3Button").style.display="block";
    document.getElementById("nooneButton").style.display="block";
}

function awardPoints1(){
    teampick = document.getElementById("team1PointsScore").innerHTML;
    teampick = parseInt(teampick);
    teampick = teampick + points;
    document.getElementById("team1PointsScore").innerHTML = teampick;
    home();
}

function awardPoints2(){
    teampick = document.getElementById("team2PointsScore").innerHTML;
    teampick = parseInt(teampick);
    teampick = teampick + points;
    document.getElementById("team2PointsScore").innerHTML = teampick;
    home();
}

function awardPoints3(){
    teampick = document.getElementById("team3PointsScore").innerHTML;
    teampick = parseInt(teampick);
    teampick = teampick + points;
    document.getElementById("team3PointsScore").innerHTML = teampick;
    home();
}

function button11(){
    hide();
    document.getElementById("button11").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 200;
    question = 'What movie series has the quote? "No, I am your father"';
    answer = "Star Wars";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button12(){
    hide();
    document.getElementById("button12").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 200;
    question = "This character is considered the antagonist of the show";
    answer = "Plankton";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button13(){
    hide();
    document.getElementById("button13").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 200;
    question = 'Just say the color "Yellow"';
    answer = "Yellow";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button14(){
    hide();
    document.getElementById("button14").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 200;
    question = "This character is another topic from this game";
    answer = "Spongebob";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button15(){
    hide();
    document.getElementById("button15").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 200;
    question = "In terms of astronomical units, how far away is the sun";
    answer = "1 AU";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button16(){
    hide();
    document.getElementById("button16").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 200;
    question = "She is the biggest artist right now and dated Travis Kelce";
    answer = "Taylor Swift";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button21(){
    hide();
    document.getElementById("button21").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 400;
    question = "Which movie has the actors Jack Black, Jackie Chan, Dustin Hoffman, Lucy Liu, Seth Rogean and Angelina Jolie?";
    answer = "Kung Fu Panda";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button22(){
    hide();
    document.getElementById("button22").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 400;
    question = "This side character orders a Double Triple Bossy Deluxe, on a raft, four-by-four animal-style, extra shingles with a shimmy and a squeeze, light axle grease, make it cry, burn it, and let it swim";
    answer = "Bubble Bass";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button23(){
    hide();
    document.getElementById("button23").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 400;
    question = "Baby ____ or Sky ____";
    answer = "Blue";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button24(){
    hide();
    document.getElementById("button24").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 400;
    question = "This characters orginated in the 80's has a wife with tall blue hair";
    answer = "Homer Simpson";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button25(){
    hide();
    document.getElementById("button25").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 400;
    question = "What is the smallest planet in the solar system";
    answer = "Mercury";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button26(){
    hide();
    document.getElementById("button26").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 400;
    question = "This rapper likes to say his name at the beginning of the track";
    answer = "DJ Khaled";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button31(){
    hide();
    document.getElementById("button31").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 600;
    question = 'The "Barden Bellas" are a part of what movie?';
    answer = "Pitch Perfect";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button32(){
    hide();
    document.getElementById("button32").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 600;
    question = "What town does Spongebob take place in";
    answer = "Bikini Bottom";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button33(){
    hide();
    document.getElementById("button33").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 600;
    question = "This color is also a flower";
    answer = "Lavender";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button34(){
    hide();
    document.getElementById("button34").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 600;
    question = "This dog can grow to be anysize, even his dog liver times 51";
    answer = "Jake the Dog";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button35(){
    hide();
    document.getElementById("button35").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 600;
    question = "What phase of the moon is it that werewolves come out";
    answer = "Full moon";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button36(){
    hide();
    document.getElementById("button36").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 600;
    question = '"The King of Rock and Roll" who also was a actor';
    answer = "Elvis Presley";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button41(){
    hide();
    document.getElementById("button41").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 800;
    question = "Which pixar movie is about the main character going into space to bring people back to Earth 700 years into the future?";
    answer = "Wall-E";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button42(){
    hide();
    document.getElementById("button42").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 800;
    question = "What is the theme park in Spongebob";
    answer = "Glove World";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button43(){
    hide();
    document.getElementById("button43").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 800;
    question = "It is an unusual way of saying dark red, but it is not wrong";
    answer = "Navy Red";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button44(){
    hide();
    document.getElementById("button44").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 800;
    question = "Ariel's friend from under the see, who is scared of everything";
    answer = "Flounder";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button45(){
    hide();
    document.getElementById("button45").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 800;
    question = "What is it called when the earth is inbetween the sun and moon, blocking out the moon";
    answer = "A Lunar Eclipse";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button46(){
    hide();
    document.getElementById("button46").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 800;
    question = "M&M";
    answer = "Eminem";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button51(){
    hide();
    document.getElementById("button51").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 1000;
    question = "This movie features two cowboys on a very special mountain";
    answer = "BrokeBack Mountain"
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button52(){
    hide();
    document.getElementById("button52").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 1000;
    question = "What is the name of the episode where Spongebob and Squidward have to work overnight when they get greeted by the Hash Slinging Slasher";
    answer = "Graveyard Shift";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button53(){
    hide();
    document.getElementById("button53").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 1000;
    question = 'This shade of green has the word "dine" in it';
    answer = "Smaragdine";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button54(){
    hide();
    document.getElementById("button54").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 1000;
    question = "This character loves honey and being with his friends who are a tiger, pig, rabbit and donkey";
    answer = "Winnie-the-Pooh";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button55(){
    hide();
    document.getElementById("button55").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 1000;
    question = "True or False? A year on Venus is longer than a day";
    answer = "False";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}

function button56(){
    hide();
    document.getElementById("button56").style.color="rgb(0, 3, 207)";
    document.getElementById("answer").style.display="block";
    showPoints();
    points = 1000;
    question = 'A hispanic singer who also made a role in the movie "Bullet Train"';
    answer = "Bad Bunny";
    document.getElementById("question").innerHTML = question;
    document.getElementById("questionNum").innerHTML = points;
}