import React from 'react';

const Hero: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="titles">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <button type="button" className="shop-now">
            shop now
          </button>
          <div className="card-items">
            {data?.slice(0, 3)?.map((data: any) => (
              <div key={data?.id} className="data-item">
                <h2>{data?.userId}+</h2>
                <p>{data?.title?.slice(0, 20)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
