import Chance from 'chance'; // api: http://chancejs.com/

const chance = new Chance();

const make = () => {
  const name = chance.sentence({ words: 2 }).replace('.', '');
  return {
    name,
    src: `https://placeholdit.imgix.net/~text?txtsize=60&txt=${name}&w=640&h=360`,
    rating: chance.floating({ min: 3, max: 5, fixed: 1 }),
    reviews: chance.integer({ min: 100, max: 1000 }),
    priceBand: chance.integer({ min: 2, max: 4 }),
    cuisine: chance.pickone(['American', 'Italian', 'Japanese', 'Indian', 'British', 'Californian']),
    neighbourhood: chance.pickone(['Alpharetta', 'Buckhead', 'West Midtown', 'Islington', 'Downtown / Union Square']),
    description: chance.sentence()
  };
};

export default make;
