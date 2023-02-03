import React from "react";
const ViewDetail = (curElem) => {
    const { username, company: { name }, website, address: { suite, street, zipcode, city } } = curElem
    return (
        <div>
            <hr />
            <div className="grid grid-two-column">
                <div>
                    <div>
                        <h3>UserName</h3>
                        <div>{username}</div>
                    </div>
                    <div>
                        <h3>Suite</h3>
                        <div>{suite}</div>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <div>{username}</div>
                    </div>
                    <div>
                        <h3>Website</h3>
                        <div>{website}</div>
                    </div>
                </div>
                <div>
                    <h3>Address</h3>
                    <div>{street}  {suite}  {city}   {zipcode}</div>
                    <h3>City</h3>
                    <div>{city}</div>
                </div>
            </div>
            <hr/>
        </div>
    )

}
export default ViewDetail;