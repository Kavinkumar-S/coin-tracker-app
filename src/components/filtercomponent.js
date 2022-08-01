import React from 'react';

const Filtercomponent = ({handlepricechange}) => {
    return (
        <>

           <div className=" filter-section-container row align-items-center justify-content-between pt-2 pb-2">    
      <div className="col-md-3 col-sm-3 col-lg-3">
        name filter
      </div>

      <div className="col-md-3 col-sm-3 col-lg-3">
        {/* price filter */}

        <select onChange={handlepricechange}>
            <option value="default " selected>
default
            </option>
            <option value="tolow">
low to high
            </option>
                 <option value="tohigh">
high to low
            </option>

       
        </select>

      </div>


      <div className="col-md-3 col-sm-3 col-lg-3">
        coin percentage filter
      </div>

      <div className="col-md-3 col-sm-3 col-lg-3">
        marketcap filter
      </div>
            </div>
  
        </>
    );
};

export default Filtercomponent;