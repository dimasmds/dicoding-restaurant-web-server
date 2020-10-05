import randomize from './randomize';

const arrayReducer = (array, count) => {
  let copy = [];
  while (copy.length !== count) {
    const index = randomize(array.length - 1);
    copy.push(array[index]);
    // eslint-disable-next-line no-loop-func
    copy = copy.filter((item, idx) => copy.indexOf(item) === idx);
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

export { arrayReducer, arrayMaker };
