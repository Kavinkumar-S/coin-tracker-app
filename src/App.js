import "./style.css"
import TableCard from "./components/tablecard";
import { useEffect, useState } from "react";
import axios from "axios";
import Filtercomponent from "./components/filtercomponent";

function App() {
 
  const [data,setData]=useState({data:[],sort:""});

  const [searchterm,setSearchterm]=useState("");


 const getData =async()=>{

  const response =await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"); 
  // console.log(response.data)
  
  setData({data:response.data,sort:""});

 }
console.log("asas",data);

  useEffect(()=>{
    getData();
  },[]);


  const handleSearch=(e)=>{
   e.preventDefault();
    setSearchterm(e.target.value);
    // console.log("setSearchterm",searchterm);

  }






// console.log("setSearchterm",searchterm);

  let Filtereditems=data.data.filter((data)=>{

    if(searchterm==="")
    {
      return data;
    }
    else if(data.name.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())){
      return data;
    }


}) ;


const handlepricechange=(e)=>{
  console.log(e.target.value);

  const sortingresult =data.data.sort((a,b)=>
  {
   const data = e.target.value

    if(data ==="tolow")
    {
      return a.current_price > b.current_price ?1:-1; 
    }
    if(data ==="tohigh")
    {
      return a.current_price < b.current_price ?1:-1; 
    }
    // if(data==="default"){

    //   return a.ath_date < b.ath_date ? 1 : -1 ;

    // }


})

setData({data:sortingresult,sort:data})
}
console.log("handlepricechange",data);

return (
  <>
  
<div className="container-fluid">
{/* search */}
<div className="container pt-4 ">

  <div className="row justify-content-center align-items-center mt-4">

<form className="col-md-4 col-sm-4">
    <input type="text" className="search-box" 
    onChange={handleSearch}
    />

</form>
</div>
</div>   

{/* filter */}
<div className="filter-section">


    <div className="container">

<Filtercomponent 
handlepricechange={handlepricechange}

/>
    </div>


</div>


{/* table */}

    <div className="table-container mt-4 ">
      <div className="container">

      {
       
    Filtereditems &&  Filtereditems.map((data)=>
      <TableCard
     data={data} 
     key={data.id}
      />
      
      )
    
     
     }

      </div>

    </div>



</div>


  </>  );
}

export default App;
