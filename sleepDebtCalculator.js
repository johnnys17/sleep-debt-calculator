
// enter how many hours of sleep you got per night
const getSleepHours = day => {
    switch(day) {
        case 'monday':
            return 6
            break;
        case 'tuesday':
            return 6
            break;
        case 'wednesday':
            return 5
            break;
        case 'thursday':
            return 6
            break;
        case 'friday':
            return 6
            break;
        case 'saturday':
            return 9
            break;
        case 'sunday':
            return 10
            break;
        default:
            return 'Error!';
    }
};


// a function that adds up how many hours of sleep you got
const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};


// what you believe is the ideal amount of hours you should get every night
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
};


// calculates how many hours you got compared to what you should have got
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
        console.log("youve got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You've got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed!");
    } else if (actualSleepHours < idealSleepHours) {
        console.log("You should get some rest because you slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
    } else {
        console.log("Error! Something went wrong, check again.");
    }
};



calculateSleepDebt();