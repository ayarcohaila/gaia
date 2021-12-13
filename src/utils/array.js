import { randomInt } from 'crypto';

export const shuffleArray = array => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = randomInt(0, currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export const getTraitRarity = list =>
  list.reduce((acc, curr) => {
    let accumulator = { ...acc };
    Object.entries(curr.item).forEach(([key, value]) => {
      if (accumulator?.[key]) {
        if (accumulator?.[key]?.[value]) {
          accumulator[key][value] += 1;
          accumulator[key]['total'] += 1;
        } else {
          accumulator[key][value] = 1;
          accumulator[key]['total'] += 1;
        }
      } else {
        if (key !== 'id' && key !== 'img' && key !== 'video') {
          accumulator[key] = { [value]: 1 };
          accumulator[key]['total'] = 1;
        }
      }
    });
    return accumulator;
  }, {});
