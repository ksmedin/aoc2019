
const getNumberOfPasswordsPartOne = (lowerBounds, upperBounds) => {
    return getPasswordsInRangeThatMeetCriteria(lowerBounds, upperBounds, criteria_hasAdjecentEqualDigits, criteria_isNeverDecreasing).length;
}

const getNumberOfPasswordsPartTwo = (lowerBounds, upperBounds) => {
    return getPasswordsInRangeThatMeetCriteria(lowerBounds, upperBounds, criteria_hasAdjecentEqualPair, criteria_isNeverDecreasing).length;
}

const getPasswordsInRangeThatMeetCriteria = (lowerBounds, upperBounds, ...criterias) => {
    const validPasswords = [];
    let start = lowerBounds;
    let end = upperBounds;
    for (; start <= end; start++) {
        const s = start.toString();
        if (criterias.every(c => c(s)))
            validPasswords.push(start);
    }
    return validPasswords;
}

const criteria_hasAdjecentEqualDigits = (password) => {
    const singles = password.split('');
    for(let i = 1; i <= singles.length; i++) {
        if (singles[i-1] === singles[i]) {
            return true;
        }
    }
    return false;
}

const criteria_hasAdjecentEqualPair = (password) => {
    const singles = password.split('');
    let prev = undefined;
    const doubles = {};
    singles.forEach(current => {
        if (prev != undefined) {
            if (prev === current) {
                doubles[current] = doubles[current] || 1;
                doubles[current]++;
            }
        }
        prev = current;
    });

    const containsDoubles = Object.values(doubles).filter(n => n === 2).length > 0;
    return containsDoubles;
}

const criteria_isNeverDecreasing = (password) => {
    const singles = password.split('').map(d => parseInt(d));
    for (let i = 1; i <= singles.length; i++) {
        if (singles[i - 1] > singles[i]) {
            return false;
        }
    }
    return true;
}

module.exports.getNumberOfPasswordsPartOne = getNumberOfPasswordsPartOne;
module.exports.getNumberOfPasswordsPartTwo = getNumberOfPasswordsPartTwo;