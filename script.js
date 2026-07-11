let matches = [];


function addMatch(){

    let Y = Number(document.getElementById("teamRank").value);
    let R = Number(document.getElementById("oppRank").value);
    let result = document.getElementById("resultType").value;
    let I = Number(document.getElementById("importance").value);

    let score;

    if(result === "win"){
        score = R / 2;
    }

    if(result === "draw"){
        score = R + (0.1 * Y);
    }

    if(result === "loss"){
        score = (R + Y) / 2;
    }


    matches.push({
        score: score,
        rank: R,
        importance: I
    });


    document.getElementById("matches").innerHTML =
        matches.map((m,i)=>
        `Match ${i+1}: Score ${m.score.toFixed(2)}, Opponent ${m.rank}, Importance ${m.importance}`
        ).join("<br>");
}



function calculateFinal(){

    let previous =
    Number(document.getElementById("previousScore").value);

    let games =
    Math.min(
    Number(document.getElementById("gamesPlayed").value),
    5);


    let totalImportance = 0;
    let weightedScore = 0;


    for(let match of matches){

        totalImportance += match.importance;

        weightedScore +=
        match.importance *
        (match.score - (0.4 * match.rank));

    }


    let calculatedScore =
    weightedScore / totalImportance;


    let updatedScore =
    previous * (1 - games/5)
    +
    calculatedScore * (games/5);


    document.getElementById("final").innerHTML =
    "Updated Score: " + updatedScore.toFixed(2);

}
