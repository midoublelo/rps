"use strict";

var _random = require("random");

var random = _interopRequireWildcard(_random);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var p1name, p1points, p2points, player1, player2, roundCount, rounds;
p1name = input("What is your name? ");
rounds = Number.parseInt(input("How many rounds will be played? "));
p1points = 0;
roundCount = rounds;
p2points = 0;
for (var i = 0, _pj_a = rounds; i < _pj_a; i += 1) {
    console.log("\n{rn} rounds left out of {rm}.\n".format({ "rn": rounds, "rm": roundCount }));
    player1 = input("What do you want to play: [1] Rock, [2] Paper or [3] Scissors? ");
    player2 = random.randint(1, 3);
    rounds -= 1;
    if (player1.lower() === "1") {
        player1 = "Rock";
    } else {
        if (player1.lower() === "2") {
            player1 = "Paper";
        } else {
            if (player1.lower() === "3") {
                player1 = "Scissors";
            } else {
                console.log("Error: '{input}' is an invalid input.".format({ "input": player1 }));
            }
        }
    }
    if (player2 === 1) {
        player2 = "Rock";
    } else {
        if (player2 === 2) {
            player2 = "Paper";
        } else {
            if (player1 === 3) {
                player2 = "Scissors";
            }
        }
    }
    if (player1 === "Rock") {
        if (player2 === "Scissors") {
            console.log("\n{p1} destroyed Player 2's Scissors with a Rock, leading to their victory. +1 point for {p1}.".format({ "p1": p1name }));
            p1points += 1;
        } else {
            if (player2 === "Paper") {
                console.log("\nPlayer 2 wrapped their Paper around {p1}'s Rock, making the Rock useless. +1 point for Player 2.".format({ "p1": p1name }));
                p2points += 1;
            } else {
                console.log("\nBoth players played Rock. No points given.\n");
            }
        }
    }
    if (player1 === "Scissors") {
        if (player2 === "Paper") {
            console.log("\n{p1} used their scissors, and cut Player 2's Paper into a thousand pieces. +1 point for {p1}.".format({ "p1": p1name }));
            p1points += 1;
        } else {
            if (player2 === "Rock") {
                console.log("\n{p1}'s Scissors were blunted then crushed by Player 2's Rock. +1 point for Player 2.".format({ "p1": p1name }));
                p2points += 1;
            } else {
                console.log("\nBoth players played Scissors. No points given.");
            }
        }
    }
    if (player1 === "Paper") {
        if (player1 === "Rock") {
            console.log("\nPlayer 2's Rock was enveloped by {p1}'s Paper. +1 point for {p1}.".format({ "p1": p1name }));
            p1points += 1;
        }
        if (player2 === "Scissors") {
            console.log("\n{p1}'s Paper was slashed and shredded by Player 2's Scissors. +1 point for Player 2.".format({ "p1": p1name }));
            p2points += 1;
        } else {
            console.log("\nBoth players played Paper. No points given.");
        }
    }
    console.log("{p1} has {p1p} points and Player 2 has {p2p} points.".format({ "p1": p1name, "p1p": p1points, "p2p": p2points }));
}
if (p1points > p2points) {
    console.log("\n{p1} is the winner with {p1p} points, beating Player 2 who gained {p2p} points.".format({ "p1": p1name, "p1p": p1points.toString(), "p2p": p2points.toString() }));
} else {
    if (p1points === p2points) {
        console.log("\nWe have a draw. Both {p1} and Player 2 have {p2p} points.".format({ "p1": p1name, "p2p": p2points.toString() }));
    } else {
        console.log("\n{p1} loses with {p1p} points, falling to Player 2 who won with {p2p} points.".format({ "p1": p1name, "p1p": p1points.toString(), "p2p": p2points.toString() }));
    }
}
//# sourceMappingURL=rps.js.map
