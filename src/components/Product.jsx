import { useContext } from "react";
import ShopContextProvider, { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "./ProductHd";
import ProductDisplay from "./ProductDisplay";
import ProductDescription from "./ProductDescription";
import RelatedProduct from "./RelatedProduct";

function Product() {
  const { productId } = useParams();
  const { all_product} = useContext(ShopContext);

  

  //addToCart(1);

  const product = all_product.find((e) => e.id === Number(productId));

 
  return (
    
    <section className="max_padd_container py-28">
      <div>
      
        <ProductHd product={product} />
        <ProductDisplay  product={product}/>
        
        <ProductDescription/>
        <RelatedProduct/>
        
      </div>
    </section>
    
  );
}

export default Product;
