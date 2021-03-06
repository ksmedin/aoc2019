// ==  option 1, for
const interpretIntcode = (intcode) => {
    const mutable = [...intcode];
    const maxIterations = Math.ceil(mutable.length / 4);
    for (let i = 0; i < maxIterations; i++) {
        const startPos = i * 4;
        const opCode = mutable[startPos];
        if (opCode === 99)
            break;
        
        const operation = opCode === 1 ? add : multiply;
        const n1 = mutable[mutable[startPos + 1]];
        const n2 = mutable[mutable[startPos + 2]];
        const target = mutable[startPos + 3];
        mutable[target] = operation(n1, n2);
    }
    return mutable;
}

// == option 2, while (terse)
// const interpretIntcode = (intcode) => {
//     const mutable = [...intcode];
//     let operationIndex = 0;
//     while (mutable[operationIndex] !== 99) {
//         const operation = mutable[operationIndex] === 1 ? add : multiply;
//         mutable[mutable[operationIndex + 3]] = operation(mutable[mutable[operationIndex + 1]], mutable[mutable[operationIndex + 2]]);
//         operationIndex += 4;
//     }
   
//     return mutable;
// }

const add = (n1, n2) => n1 + n2;
const multiply = (n1, n2) => n1 * n2;

const whichNounAndVerbProduceWantedOutput = (intcode, wantedOutput) => {
    for (let noun = 0; noun < 100; noun++) {
        for(let verb = 0; verb < 100; verb++) {
            const mutable = [...intcode];
            mutable[1] = noun;
            mutable[2] = verb;
            const [ output ] = interpretIntcode(mutable);
            if (output === wantedOutput) {
                return { success: true, noun, verb };
            }
        }
        verb = 0;
    }

    return { success: false };
}

module.exports.interpretIntcode = interpretIntcode;
module.exports.whichNounAndVerbProduceWantedOutput = whichNounAndVerbProduceWantedOutput;