import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
    const {fetchDataByCategory,setQuery}=useContext(PixabayContext);
  return (

    <>
    <div className="container text-center my-3">
      <button type="button" onClick={()=>fetchDataByCategory('nature')} className="btn btn-outline-primary mx-3">
        Nature
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('science')} className="btn btn-outline-warning mx-3">
        Science
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('computer')} className="btn btn-outline-light mx-3">
        Computer       
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('buildings')} className="btn btn-outline-info mx-3">
        Buildings
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('sports')} className="btn btn-outline-warning mx-3">
        Sports
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('transportation')} className="btn btn-outline-info mx-3">
        Transportation  
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('travel')} className="btn btn-outline-light mx-3">
        Travel
      </button>
      <button type="button" onClick={()=>fetchDataByCategory('food')} className="btn btn-outline-primary mx-3">
        Food
      </button>
    </div>
    <div className="container" style={{width:'600px'}}>
         <input type="text" onChange={(e)=>setQuery(e.target.value)}class="form-control bg-dark text-light"></input>
    </div>

    </>
  );
};

export default Navbar;
