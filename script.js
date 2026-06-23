let variants = ['rock', 'paper', 'scissors']
let winner = ["you won", "you lost"]
function getHumanChoice() {
    return prompt('write yours:')
}
function getComputerChoice() {
    return variants[Math.floor(Math.random() * 3)]
}
function gameDecider(human, comptuer) {
    console.log("Human: " + human + ' vs ' + "Comptuter: " + comptuer)
    if (human == comptuer) {
        return alert('draw: ' + human + ' vs ' + comptuer + ', play again')
    } else if (human == variants[0]) {
        if (comptuer == variants[1]) {
            return alert(winner[1] + ', ' + variants[1] + ' won')
        } else if (comptuer == variants[2]) {
            return alert(winner[0] + ', ' + variants[0] + ' won')
        }
    } else if (human == variants[1]) {
        if (comptuer == variants[0]) {
            return alert(winner[0] + ', ' + variants[1] + ' won')
        } else if (comptuer == variants[2]) {
            return alert(winner[1] + ', ' + variants[2] + ' won')
        }
    } else if (human == variants[2]) {
        if (comptuer == variants[0]) {
            return alert(winner[1] + ', ' + variants[0] + ' won')
        } else if (comptuer == variants[1]) {
            return alert(winner[0] + ', ' + variants[2] + ' won')
        }
    } else {
        alert('how dumb are you?!')
    }
}
gameDecider(getHumanChoice(), getComputerChoice())
