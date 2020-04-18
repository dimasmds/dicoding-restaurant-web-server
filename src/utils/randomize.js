const randomize = (max, min = 1) => {
    return Math.floor(Math.random() * max) + min;
};

export default randomize;
