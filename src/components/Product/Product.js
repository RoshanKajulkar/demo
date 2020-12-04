import React from "react";

import "./Product.css"

const Product = () => {
  return (
    <div className="main-body">
      <div>
        <p className="company-name">Aesop.</p>
      </div>
      <div className="Product-description">
        <div className="location">
            <p>Body & Hand . Body</p>
        </div>
        <div className="heading">
            <h1>Redemption Body Scrub</h1>
        </div>
        <div className="info">
            <p>A bracing blend of finely milled Pumice, Bamboo Stem and aromatic Pine Needle oil that sloughs away tired cells to leave skin polished and refreshed, perfectly prepared for hydration.</p>

            <div className="sub-info">
                <p className="sub-info-heading">Skin feel</p>
                <p>Soft, smooth, refreshed</p>
            </div>

            <div className="sub-info">
                <p className="sub-info-heading">Aroma</p>
                <p>Fresh, alpine, camphoric</p>
            </div>

            <div className="sub-info">
                <p className="sub-info-heading">Key ingredients</p>
                <p>Bamboo Stem, Sage Leaf, Pine Needle</p>
            </div>

            <button className="btn">
                Add to your cart - $260.00
            </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
