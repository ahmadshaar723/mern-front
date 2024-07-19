import { useContext } from "react"

import { ShopContext } from "../Context/ShopContext"
import { TbTrash } from "react-icons/tb";
import { MdAddShoppingCart } from "react-icons/md";


function CartItems() {

    const{all_product,cartItems,removeFromCart,addToCart ,count,getTotalCartAmount}=useContext(ShopContext);
    let total=0;
  return (
    <section className="max_padd_container pt-28">
      {all_product.length===0?<p className="text-center">Loading...</p>: ( <table className="w-full mx-auto ">
            <thead>
                <tr className="bg-slate-900/10 regular-14 sm:regular-22 text-start py-12">
                    <th className="p-1 py-2">Products</th>
                    <th className="p-1 py-2">Title</th>
                    <th className="p-1 py-2">Price</th>
                    <th className="p-1 py-2">Quantity</th>
                    <th className="p-1 py-2">Total</th>
                    <th className="p-1 py-2">Remove</th>
                    <th className="p-1 py-2">Add</th>

                </tr>
            </thead>
            <tbody>
                { all_product.map((e)=>{
                    
                        
                        if(cartItems[e.id]>0){
                            total =total+(e.new_price * cartItems[e.id])
                            return <tr key={e.id} className="border-b text-gray-30 border-slate-900/20 p-6 medium-14 text-center ">
                                <td className="flexCenter"><img src={e.image} alt="productimage"  height={43} width={43} className="rounded-lg ring-1 ring-slate-900/5 my-1"/></td>
                                <td><div className="w-14 sm:w-full line-clamp-3">{e.name}</div></td>
                                <td>${e.new_price}</td>
                                <td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
                                <td>${e.new_price * cartItems[e.id]}</td>
                                <td ><div className="bold-22 pl-5 md:pl-8 lg:pl-8 sm:pl-6 xl:pl-14"><TbTrash className="cursor-pointer" onClick={()=> removeFromCart(e.id)}/></div></td>
                                <td ><div className="bold-22 pl-1 md:pl-6 lg:pl-6 sm:pl-2 xl:pl-14"><MdAddShoppingCart className="cursor-pointer" onClick={()=> addToCart(e.id)}/></div></td>

                            </tr>
                        }
                    
                    return null
                    
                })}
            </tbody>
        </table>)}
        {all_product.length===0?<p></p>: (  <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]">
            <div className="flex flex-col gap-10">
                <h4 className="bold-20">Summary</h4>
                <div>
                    <div className="flexBetween py-4">
                        <h4 className="medium-16">Subtotal:</h4>
                        <h4 className="text-gray-30 font-semibold">${getTotalCartAmount()}</h4>
                    </div>
                    <hr />
                    <div className="flexBetween py-4">
                        <h4 className="medium-16">Shipping Fee:</h4>
                        <h4 className="text-gray-30 font-semibold">Free</h4>
                    </div>
                    <hr />
                    <div className="flexBetween py-4">
                        <h4 className="bold-18">Total:</h4>
                        <h4 className="bold-18">${total}</h4>
                    </div>
                </div>
                <button className="btn_dark_rounded w-44">Checkout</button>
                <div className="flex flex-col gap-10">
                    <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
                    <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10">
                        <input type="text"  className="bg-transparent border-none outline-none " placeholder="Coupon Code"/>
                        <button className="btn_dark_rounded">Submit</button>
                    </div>
                </div>
            </div>
        </div>)}
    </section>
  )
}

export default CartItems