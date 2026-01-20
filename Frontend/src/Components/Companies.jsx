import React from 'react'
import c1 from "../assets/images/c1.png"
import c2 from "../assets/images/c2.png"
import c3 from "../assets/images/c3.png"
import c4 from "../assets/images/c4.png"
import c5 from "../assets/images/c5.png"
const Companies = () => {
  return (
    <div>
      <div className="container companies">
        <div className="row justify-content-around">
          <div className="col-2">
            <img src={c1} alt="" className="unfit-image" />
          </div>
          <div className="col-2">
            <img src={c2} alt="" className="unfit-image" />
          </div>
          <div className="col-2">
            <img src={c3} alt="" className="unfit-image" />
          </div>
          <div className="col-2">
            <img src={c4} alt="" />
          </div>
          <div className="col-2">
            <img src={c5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Companies
