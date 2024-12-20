import { useTopproductQuery } from "../../redux/api/productApiSlice";
import Loader from "../../componets/Loader";
import SmallProduct from "./SmallProduct";
// import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useTopproductQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
       <h1 className=' text-3xl font-bold text-center mb-4 mt-20'>Top products</h1>
       <hr className=' w-16 h-1 m-auto mb-20 bg-orange-700' />
   <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
          {data.map((product) => (
            <div key={product._id}>
              <SmallProduct product={product} />
            </div>
          ))}
       
     
      {/* <ProductCarousel /> */}
    </div>
  </>
  );
};

export default Header;