function calculate(){

let lines = document.getElementById("input").value.split("\n");

let output = "";


for(let line of lines){

    if(line.trim()=="") continue;


    let parts = line.split("|");

    let team = parts[0].trim();
    let previous = Number(parts[1]);
    let Y = Number(parts[2]);

    let games =
    parts[3].trim()
    .split("/")
    .filter(x=>x.trim()!="");


    let weightedTotal = 0;
    let importanceTotal = 0;


    for(let game of games){

        let data = game.split(",");

        let opponent = data[0].trim();
        let R = Number(data[1]);
        let I = Number(data[2]);
        let result = data[3].trim().toUpperCase();


        let score;


        if(result=="W"){
            score = R/2;
        }

        else if(result=="D"){
            score = R + (0.1*Y);
        }

        else if(result=="L"){
            score = (R+Y)/2;
        }


        weightedTotal +=
        I*(score-(0.4*R));


        importanceTotal += I;

    }


    let calculated =
    weightedTotal / importanceTotal;


    let G =
    Math.min(games.length,5);


    let updated =
    previous*(1-G/5)
    +
    calculated*(G/5);



    output +=
    `<p>
    <b>${team}</b><br>
    Calculated Score: ${calculated.toFixed(2)}
    <br>
    Updated Score: ${updated.toFixed(2)}
    </p>`;

}


document.getElementById("output").innerHTML=output;

}
