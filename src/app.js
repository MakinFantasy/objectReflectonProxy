const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const prop = obj.name;



function orderByProps (array, sortOrder) {
    for (const prop in array) {
        if (prop === sortOrder[sortOrder.length - 1]) {
            // equal them, then set prop as first element, and the previous element need to be set as second
        }
    }
}
