import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets.js';
import axios from 'axios'
import { toast } from 'react-toastify';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {

    try {

      if(!token){
        return null
      }
    
      const res = await axios.post(backendUrl + '/api/order/userorders', {}, {headers:{token}})
      console.log(res.data.orders)
      let allOrderedItems = []
      if(res.data.success){
        res.data.orders.map((order)=>{
          order.items.map((item)=>{
            
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date

            allOrderedItems.push(item)

          })
        })
        setorderData(allOrderedItems.reverse())
      }
    
    } catch (error) {

      console.log(error)
      toast.error(error.message)
      
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [])

  return (
    <div className='border-t pt-16'>

        <div className='text-2xl'>
          <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
          
          {
            orderData.map((item,index) => (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                <div className='flex items-start gap-6 text-sm'>
                    <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                    <div>
                      <p className='sm:text-base font-medium'>{item.name}</p>

                      <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                        <p className='text-lg'>{currency}{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>

                      <p className='mt-2'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                      <p className='mt-2'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                    </div>
                </div>

                <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                        <p className='text-sm md:text-base'>{item.status}</p>
                    </div>
                    <button onClick={loadOrderData} className='border text-sm px-4 py-2 font-medium rounded-sm cursor-pointer'>Track Order</button>
                </div>

              </div>  
            ))
          }
        </div>


    </div>
  )
}

export default Orders
