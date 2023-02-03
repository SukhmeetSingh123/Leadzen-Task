import React, { useState } from "react";
import ViewDetail from "./ViewDetail";
const RenderDetail = (curElem) => {
    let [view,setView]=useState("View Detail");
    const { name, phone, address: { city }, email } = curElem;
    return (
        <div className="row container">
            <div className="grid grid-three-column">
                <div className="name">
                    {name}
                </div>
                <div>
                    <h3>CONTACT</h3>
                    {phone}
                </div>
                <div>
                    <h3>CITY</h3>
                    {city}
                </div>
                <div>
                    <h3>E-MAIL</h3>
                    {email}
                </div> 
                <div className="name">
                    <button className="Button" onClick={()=>view=="View Detail"?setView("Hide Detail"):setView("View Detail")}>{view}</button>
                </div>
            </div>
            <div className={` ${view=="View Detail" ? "hidden"  : ""}`}>
            <div className="margin">
                          <ViewDetail {...curElem}/>
                </div>
                </div>
        </div>
    )
}
export default RenderDetail;