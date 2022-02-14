let doors = [];

for (let i = 0; i <= 100; i++) {
    doors[i] = {
        "doorNumber": i + 1,
        "isOpen": false
    }
}

for (let i = 0; i <= 100; i++) {
    for (const door of doors) {
        let shouldToggle = door.doorNumber % (i + 1);
        if (shouldToggle === 0) {
            door.isOpen = !door.isOpen;
        }
    }
}

for (const door of doors) {
    if (door.isOpen === true) {
        console.log(door.doorNumber);
    }
}


