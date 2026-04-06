import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import { backendUrl } from "../App";
import { toast } from "react-toastify";

const list = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      console.log();
      if (response.data.success) {
        console.log(response.data.products)
        setList(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return( <>
  <p className="mb-2">All products list</p>
  <div className="flex flex-col gap-2" >
    <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 text-sm border bg-gray-100" >

      <b>Image</b>
      <b>Name</b>
      <b>Category</b>
      <b>Price</b>
      <b className="text-center">Action</b>

    </div>

    {/* Product list */}

    {
      list.map((item, index)=>{
        <div className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] ">
          <img src={item.image[0]} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>X</p>

        </div>
      })
    }


  </div>

  
  </>
    
  );
};

export default list;
