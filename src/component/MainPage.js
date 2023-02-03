import React from "react";
import { useDetailContext } from "../context/MainPage_Context";
import RenderDetail from "./RenderDetails";
const MainPage = () => {
    const { isLoading, detail } = useDetailContext();

    if (isLoading) {
        return <div>......Loading</div>
    }
    return (
        <div>
            {
                detail.map((curElem) => {
                    return <RenderDetail key={curElem.id} {...curElem} />
                })
            }
        </div>

    );

}
export default MainPage;