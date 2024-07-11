import { createContext, useEffect, useState } from "react";


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index]=0;
    
  }
  return cart;
}
const ShopContextProvider = (props) => {


  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [all_product, setall_product] = useState([]);
  const [count, setCount] = useState(0);

  let c=0;

  useEffect(()=>{
    fetch('https://mern1-back-1.onrender.com/allproducts').then((resp)=> resp.json()).then((data)=> setall_product(data));
    if(localStorage.getItem('auth-token')){
      fetch('https://mern1-back-1.onrender.com/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:"",
      }).then((resp)=>resp.json()).then((data)=>{setCartItems(data[0]);
        setCount(data[1]);
        console.log(data);
        
      });
      
    }
    
  },[])
  

  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    setCount(count+1);
    if(localStorage.getItem('auth-token')){
      fetch("https://mern1-back-1.onrender.com/addtocart",{
        method:'POST',
        headers:{
          Assept: 'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId": itemId}),
      }).then((resp)=>{resp.json()}).then((data)=>console.log(data));
    }
    
  }
  const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    setCount(count-1);
    if(localStorage.getItem('auth-token')){
      fetch("https://mern1-back-1.onrender.com/removefromcart",{
        method:'POST',
        headers:{
          Assept: 'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:JSON.stringify({"itemId": itemId}),
      }).then((resp)=>{resp.json()}).then((data)=>console.log(data));
    }
  }
  

  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id===Number(item));
        totalAmount +=itemInfo.new_price * cartItems[item];
        // setCount(count+=cartItems[item]);
      }
    }
    return totalAmount;
  }
  
  
  const contextValue = { all_product , cartItems , addToCart , removeFromCart ,getTotalCartAmount , count };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider
