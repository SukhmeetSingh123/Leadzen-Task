import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    background-color: #cccccc;
    font-family: math;
}
.row{
    background-color:#ece9e9;
    border-radius:1rem;
} 
.grid{
    display:grid;
}
.hidden{
    display:none;
}
.name{
    padding-top:2rem;
    font-weight: bold;
}
.grid-three-column{
    grid-template-columns: repeat(5, 1fr); 
   
}
.grid-two-column{
    grid-template-columns: repeat(2,1fr)
}
.margin{
    margin-top:2rem
}
.container {
    max-width:130rem;
    padding:3rem 3.2rem;
    margin:1rem;
}
.Button{
    width:7rem;
    height:3rem;
    background-color:red;
    border-radius:1rem;
    border:0px;
    color :white;
}
Button:hover{
    cursor:pointer ;
    background-color:black;
}
`;