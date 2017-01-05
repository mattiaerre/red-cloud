import React from 'react'; // eslint-disable-line no-unused-vars

const Details = ({ data }) => { // eslint-disable-line arrow-body-style
  return (
    <div className="animation fade-in">
      <div className="row clear center">
        <div className="col-12">
          <h2>{data.name}</h2>
        </div>
      </div>
      <div className="row clear center">
        <div className="col-12">
          <img src={data.src} className="img-fluid border-radius-6" />
        </div>
      </div>
      <div className="row clear center">
        <div className="col-4">
          {data.rating}
        </div>
        <div className="col-4">
          ({data.reviews})
        </div>
        <div className="col-4">
          {data.priceBand}
        </div>
      </div>
      <div className="row clear center">
        <div className="col-12">
          {data.cuisine} | {data.neighbourhood}
        </div>
      </div>
      <div className="row clear center">
        <div className="col-12">
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default Details;
