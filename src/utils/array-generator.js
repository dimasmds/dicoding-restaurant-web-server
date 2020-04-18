import randomize from "./randomize";

const arrayReducer = (array, count) => {
    let copy = [];
    while (copy.length !== count) {
        const index = randomize(array.length - 1);
        copy.push(array[index]);
        copy = copy.filter((item, index) => copy.indexOf(item) === index);
    }
    return copy;
};

const arrayMaker = (array, count) => {
    const copy = [];
    while (copy.length !== count) {
        const index = randomize(array.length - 1);
        copy.push(array[index]);
    }
    return copy;
};

export {arrayReducer, arrayMaker};
