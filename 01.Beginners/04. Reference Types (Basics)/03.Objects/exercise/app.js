// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
    type: 'Toyota',
    model: '500',
    color: 'blue'
};

// Accessing Properties
console.log(typeof car);

// Updating Properties
console.log(car.type);
console.log((car.type = "Suzuki"));

// Add new properties
console.log((car.wheels = 4));
console.log(car);