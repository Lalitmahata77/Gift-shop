import { Link, useParams } from "react-router";
import Loader from "../../componets/Loader";
import { useReadProductQuery, useTopproductQuery } from "../../redux/api/productApiSlice";
// import HeartIcon from "./HeartIcon";
import { FaEye } from "react-icons/fa";
import Pop from "./pop";

// import HeartIcon from "./HeartIcon";

// import HeartIcon from "./HeartIcon";
const SmallProduct = ({product}) => {
  // const { data, isLoading, error } = useTopproductQuery();

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <h1>ERROR</h1>;
  // }
  const { id: productId } = useParams();
 const {
    data,
    isLoading,
    refetch,
    error,
  } = useReadProductQuery(productId);
    
    
  return (
    <>
       {/* <h1 className=' text-3xl font-bold text-center mb-4 mt-20'>Top products</h1>
       <hr className=' w-16 h-1 m-auto mb-20 bg-orange-700' />
   <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
     {
       data?.map((product)=>(
   <div key={product?._id} className=' '> */}
     <div className="card card-compact bg-base-100 w-96 shadow-xl">
   
     <figure>
       <img
         src={product?.image}
         alt={product?.name} />
         {/* <HeartIcon product={product}/> */}
     </figure>
     <div>
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>
<FaEye size={25}/>

 
</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <div className="py-4">
    <div className="font-sans">
            <div className="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="  lg:col-span-3 bg-gradient-to-tr  from-[#F8C794] via-[#FFE0B5] to-[#FFF2D7] rounded-lg w-full lg:sticky top-0 text-center p-6">
                        <img  src={product?.image}
                alt={product?.name} className=" rounded object-cover mx-auto py-6" />

                        {/* <hr className="border-white border my-6" />

                        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
                            <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee6.webp" alt="Product1" className="w-full h-full cursor-pointer" />
                            </div>
                            <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee3.webp" alt="Product1" className="w-full h-full cursor-pointer" />
                            </div>
                            <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee4.webp" alt="Product1" className="w-full h-full cursor-pointer" />
                            </div>
                            <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee5.webp" alt="Product1" className="w-full h-full cursor-pointer" />
                            </div>
                        </div> */}
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800">{product?.name}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">${product?.price}</p>
                            {/* <p className="text-gray-400 text-xl"><strike>$16</strike> <span className="text-sm ml-1">Tax included</span></p> */}
                        </div>

                        {/* <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div> */}

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">{product?.description}</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                               
                            </ul>
                        </div>

                        <button type="button" className="w-full mt-8 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-md">Add to cart</button>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-800">{product?.reviews.rating}</h3>
                            <div className="space-y-3 mt-4">
                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg className="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-2/3 h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                                    <svg className="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div className="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div className="w-1/3 h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                                </div>

                                <div className="flex items-center">
                                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                              </div>
                            </div>

                            <div className="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                <div className="ml-3">
                                    <h4 className="text-sm font-bold">{product?.reviews.name}</h4>
                                    <div className="flex space-x-1 mt-1">
                                        <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p className="text-xs !ml-2 font-semibold">2 mins ago</p>
                                    </div>
                                    <p className="text-xs mt-4">{product?.reviews?.comment}</p>
                                </div>
                            </div>
                            <button type="button" className="w-full mt-8 px-4 py-2.5 bg-transparent border border-orange-400 text-gray-800 font-semibold rounded-lg">{product?.reviews?.comment}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</div>
     <Link to={`/product/${product?._id}`}>
     <div className="card-body">
       <h2 className="card-title">{product?.name}</h2>
       <p>{product?.description}</p>
       <div className="card-actions justify-end">
       <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
               ${product?.price}
             </span>
       </div>
     </div>
     </Link>
     </div>
   {/* </div>
       ))
     }
   </div> */}
   </>
  );
};

export default SmallProduct;