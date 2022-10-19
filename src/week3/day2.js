const getDaysDifference = (date) => {
    const currentDate = new Date();
    return Math.ceil(Math.abs(currentDate.getTime() - date.getTime()) / (1000*60*60*24));
}

function compareDates1(dateA, dateB) {
    const daysUntilDateA = getDaysDifference(dateA);
    const daysUntilDateB = getDaysDifference(dateB);

    if (daysUntilDateA * 2 <= daysUntilDateB) {
        return `If you thought ${dateA.toDateString()} was a long wait, wait until you see how long it is until ${dateB.toDateString()}.`;
    } else if (daysUntilDateA < daysUntilDateB) {
        return `Don't worry, ${dateB.toDateString()} isn't too much farther away than ${dateA.toDateString()} in the scheme of things.`;
    } else if (daysUntilDateA === daysUntilDateB) {
        return `They're the same number of days away!`;
    } else {
        return `You know ${dateA.toDateString()} is closer, right?`;
    }
}

function compareDates2(dateA, dateB) {
    const daysUntilDateA = getDaysDifference(dateA);
    const daysUntilDateB = getDaysDifference(dateB);

    if (daysUntilDateA < daysUntilDateB) {
        const dateBToDateARatio = Math.floor(daysUntilDateB/daysUntilDateA);
        return `Looks like ${dateB.toDateString()} is ${dateBToDateARatio} times farther away than ${dateA.toDateString()}.`;
    } else if (daysUntilDateA === daysUntilDateB) {
        return `Same exact date there, mate.`;
    } else {
        const dateAToDateBRatio  = Math.floor(daysUntilDateA/daysUntilDateB);
        return `Looks like ${dateA.toDateString()} is ${dateAToDateBRatio} times farther away than ${dateB.toDateString()}.`;
    }
}

function calculateDaysUntil(dateA, dateB) {
    const daysUntilDateA = getDaysDifference(dateA);
    const daysUntilDateB = getDaysDifference(dateB);
    return `You have ${daysUntilDateA} days left until ${dateA.toDateString()}, and ${daysUntilDateB} days left until ${dateB.toDateString()}.`;
}

// feel free to plug these example dates into your functions
const dateA = new Date(2022,9,26);  // months are zero indexed.
const dateB = new Date(2022,11,25); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

console.log(compareDates1(dateA, dateB));
console.log(compareDates2(dateA, dateB));
console.log(calculateDaysUntil(dateA, dateB));
