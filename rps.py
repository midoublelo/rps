import random

## 1 = rock
## 2 = paper
## 3 = scissors

## rock beats scissors, paper beats rock, scissors beats paper

p1name = input("What is your name? ")
rounds = int(input("How many rounds will be played? "))
p1points = 0
roundCount = rounds
p2points = 0

for i in range(rounds):
    print("\n{rn} rounds left out of {rm}.\n".format(rn = rounds, rm = roundCount))
    player1 = input("What do you want to play: [1] Rock, [2] Paper or [3] Scissors? ")
    player2 = random.randint(1,3)
    rounds -= 1

    ## Player1
    if player1.lower() == '1':
        player1 = "Rock"
    elif player1.lower() == '2':
        player1 = "Paper"
    elif player1.lower() == '3':
        player1 = "Scissors"
    else:
        print("Error: '{input}' is an invalid input.".format(input = player1))

    ## Player2
    if player2 == 1:
        player2 = "Rock"
    elif player2 == 2:
        player2 = "Paper"
    elif player1 == 3:
        player2 = "Scissors"

    if player1 == "Rock":
        if player2 == "Scissors":
            print("\n{p1} destroyed Player 2's Scissors with a Rock, leading to their victory. +1 point for {p1}.".format(p1 = p1name))
            p1points += 1
        elif player2 == "Paper":
            print("\nPlayer 2 wrapped their Paper around {p1}'s Rock, making the Rock useless. +1 point for Player 2.".format(p1 = p1name))
            p2points += 1
        else:
            print("\nBoth players played Rock. No points given.\n")

    if player1 == "Scissors":
        if player2 == "Paper":
            print("\n{p1} used their scissors, and cut Player 2's Paper into a thousand pieces. +1 point for {p1}.".format(p1 = p1name))
            p1points += 1
        elif player2 == "Rock":
            print("\n{p1}'s Scissors were blunted then crushed by Player 2's Rock. +1 point for Player 2.".format(p1 = p1name))
            p2points += 1
        else:
            print("\nBoth players played Scissors. No points given.")

    if player1 == "Paper":
        if player1 == "Rock":
            print("\nPlayer 2's Rock was enveloped by {p1}'s Paper. +1 point for {p1}.".format(p1 = p1name))
            p1points += 1
        if player2 == "Scissors":
            print("\n{p1}'s Paper was slashed and shredded by Player 2's Scissors. +1 point for Player 2.".format(p1 = p1name))
            p2points += 1
        else:
            print("\nBoth players played Paper. No points given.")

    print("{p1} has {p1p} points and Player 2 has {p2p} points.".format(p1 = p1name, p1p = p1points, p2p = p2points))

if p1points > p2points:
    print("\n{p1} is the winner with {p1p} points, beating Player 2 who gained {p2p} points.".format(p1 = p1name, p1p = str(p1points), p2p = str(p2points)))
elif p1points == p2points:
    print("\nWe have a draw. Both {p1} and Player 2 have {p2p} points.".format(p1 = p1name, p2p = str(p2points)))
else:
    print("\n{p1} loses with {p1p} points, falling to Player 2 who won with {p2p} points.".format(p1 = p1name, p1p = str(p1points), p2p = str(p2points)))