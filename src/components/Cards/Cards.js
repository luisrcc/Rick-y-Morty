import React from "react";

function Cards({ character }) {
  return (
    <div className="row">
      {character.map((item, index) => (
        <div key={index} className="col mb-4">
          <div className="card" style={{ minWidth: "300px", minHeight: '500px', backgroundColor:'black'}}>
            <img src={item.image} alt="" />
            <div className="card-body">
                <div className='card-title'style={{fontWeight: 'bold', color:'white'}}>{item.name}</div>
                <hr/>
                <p style={{color:'white'}}> Specie: {item.species} </p>
                <p style={{color:'white'}} >Location: {item.location.name}</p> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
//style={{color:'white}}

export default Cards;
