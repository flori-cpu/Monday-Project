const PI = 3.1415;
const radius = 5;
const initialPlants = 20;
const plantSpace = 0.8;


const area = PI * radius * radius;
const maxCapacity = Math.floor(area / plantSpace);

function calculateGrowth(weeks) {
    return initialPlants * Math.pow(2, weeks);
}


function assessGrowth(weeks) {
    const plantCount = calculateGrowth(weeks);
    console.log(`Week ${weeks}: Plant count is ${plantCount}.`);

    if (plantCount > maxCapacity * 0.8) {
        console.log("Action: Prune the plants.");
    } else if (plantCount >= maxCapacity * 0.5) {
        console.log("Action: Monitor the plants.");
    } else {
        console.log("Action: You can plant more.");
    }
}



// Check growth for 1, 2, and 3 weeks
assessGrowth(1);
assessGrowth(2);
assessGrowth(3);

// Additional space for 100 plants over 10 weeks
const newInitialPlants = 100;
const weeksOfGrowth = 10;
const finalCount = newInitialPlants * Math.pow(2, weeksOfGrowth);
const requiredSpace = finalCount * plantSpace;

if (requiredSpace > area) {
    const additionalSpace = requiredSpace - area;
    console.log(`Additional space needed: ${additionalSpace.toFixed(2)} square meters.`);
} else {
    console.log("No additional space needed.");
}

// Error handling for starting with 100 plants
try {
    if (requiredSpace > area) {
        throw new Error("Not enough space for the plants.");
    } else {
        console.log("Space is sufficient.");
    }
} catch (error) {
    console.error(`Error: ${error.message}`);
}
