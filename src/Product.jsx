import "./Product.css"
import Price from "./Price"


function Product({title , idx }){
   let oldPrices = ["12,495" , "11,900" , "1,599" , "599"];
let newPrices = ["8,999" , "9,199" , "899" , "272"];
  let description = 
  [["8000 DPI","5 Progrmmable buttons"],
    ["Intitutive touch surface","Designed for i pad pro" ],
    ["Designs for iPad Pro","Intitutive touch surface"] , 
    ["wireless mouse","Optical orientation"]];

    return (
<div className = "Product"  >
   <h4>{title}</h4>
   <p>{description[idx][0]}</p>
   <p>{description[idx][1]}</p>
   <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
   </div>
   )
}

export default Product;

