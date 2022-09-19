let car = {
    model: 'Kia'
};

function changeColor(color) {
    this.color = color
}

changeColor.apply(car, ['red']);
changeColor.call(car, 'green');
const setColor = changeColor.bind(car);
setColor('blue');

console.log(car);
