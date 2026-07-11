fetch("teams.json")
.then(response => response.json())
.then(teams => {

    teams.sort((a,b)=>a.score-b.score);

    let output="";

    teams.forEach((team,index)=>{

        output += `
        <tr>
        <td>${index+1}</td>
        <td>${team.name}</td>
        <td>${team.score.toFixed(2)}</td>
        </tr>
        `;

    });

    document.getElementById("table").innerHTML=output;

});
