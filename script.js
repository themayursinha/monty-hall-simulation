let hasChosen = false;
let chosenDoor = 0;
let carBehind = Math.floor(Math.random() * 3) + 1;

function chooseDoor(doorNumber) {
    if (hasChosen) {
        document.getElementById("message").innerHTML = "You've already made your choice. Refresh to play again.";
        return;
    }

    chosenDoor = doorNumber;
    let message = `You've chosen Door ${doorNumber}. `;
    
    // Simulate the host opening a door with a goat
    let goatDoor = [1, 2, 3].find(d => d !== carBehind && d !== doorNumber);
    message += `The host reveals a goat behind Door ${goatDoor}. `;

    // Offer a chance to switch
    let otherDoor = [1, 2, 3].find(d => d !== doorNumber && d !== goatDoor);
    message += `Do you want to switch to Door ${otherDoor}? <button onclick="switchDoor(${otherDoor})">Switch</button> <button onclick="stayWithDoor()">Stay</button>`;

    document.getElementById("message").innerHTML = message;
    hasChosen = true;
}

function switchDoor(doorNumber) {
    chosenDoor = doorNumber;
    finalizeChoice();
}

function stayWithDoor() {
    finalizeChoice();
}

function finalizeChoice() {
    let message = chosenDoor === carBehind ? "Congratulations! You've won a car!" : "Sorry, you've won a goat.";
    message += ` The car was behind Door ${carBehind}.`;
    document.getElementById("message").innerHTML = message;
}
