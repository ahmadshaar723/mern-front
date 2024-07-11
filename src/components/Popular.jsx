
import { useEffect, useState } from "react";
import Item from "./Item";

function Popular() {

  const [POPULAR, setPOPULAR] = useState([]);

  useEffect(()=>{
    fetch('https://mern1-back-1.onrender.com/popularproducts').then((resp)=> resp.json()).then((data)=> setPOPULAR(data))
  },[])

  return (
    <section className="bg-primary">
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
        <h3 className="h3 text-center">Popular Products</h3>
        <hr className="h-[3px] via-black md:w-full mx-auto bg-gradient-to-l from-transparent to-transparent mb-16" />
        <div className="item">
          {POPULAR.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
