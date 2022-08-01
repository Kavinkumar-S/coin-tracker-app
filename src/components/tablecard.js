import React from 'react';

const TableCard = ({data}) => {
   
//     console.log("datas",data);
    return (
    
        <div className="table-section-container row align-items-center justify-content-between pt-2 pb-2 mb-2"
        key={data.id}
        >

        <div className="col-md-3 col-sm-3 col-lg-3">
<img src={data.image} className="table-img" />        
{data.name}
        </div>

        <div className="col-md-3 col-sm-3 col-lg-3">
Rs.{data.current_price}
        </div>
        <div className="col-md-3 col-sm-3 col-lg-3">
{data.market_cap_change_percentage_24h}
        </div>

        <div className="col-md-3 col-sm-3 col-lg-3">
Rs.{data.market_cap}
        </div>


      </div>


    );
};

export default TableCard;