'use strict';

function Moduuli2T10(){
    let candidateCount = parseInt(prompt("type the number of candidates"));
    let candidates = [];

    for(let i = 0; i < candidateCount; i++){
        let candidate = prompt(`type the name of candidate ${i + 1}`)
        candidates.push({
            "name": candidate,
            "votes": 0
        }
        )
    }

    let voterCount = parseInt(prompt("type the number of voters"));
    let voterChoise;
    for(let i = 0; i < voterCount; i++){
        voterChoise = prompt("Who will you vote for?");

        for(let o = 0; o < candidateCount; o++){
            if(voterChoise == candidates[o]["name"]){
                candidates[o]["votes"]++
            }
        }
    }

    candidates.sort(voteSort);

    console.log(`The winner is ${candidates[0]["name"]} with ${candidates[0]["votes"]} votes`)
    for(let i = 0; i < candidateCount; i++){
        console.log(`${candidates[i]["name"]}: ${candidates[i]["votes"]} votes`)
    }

}

function voteSort(a, b){
    return a - b;
}