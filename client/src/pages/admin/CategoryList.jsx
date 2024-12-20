import {useCreateCategoryMutation,useGetAllCategoryQuery,useDeleteCategoryMutation,useUpdateCategoryMutation} from "../../redux/api/categoryApiSlice"

import Modal from "../../componets/Modal"
import CategoryForm from "../../componets/CategoryForm"
import {toast} from "react-toastify"

import { useState } from "react"
import { useParams } from "react-router"
// import AdminMenu from "./AdminMenu"
const CategoryList = () => {
  const { params : id} = useParams()
const {data,refetch} = useGetAllCategoryQuery()
const [name, setName] = useState("")
const [updatingName, setUpdatingName] = useState("")
const [seletedCategory,setSelectedCategory] = useState(null)
const [modalVisible, setModalVisible] = useState(false)
const[createCategory] = useCreateCategoryMutation()
const[updateCategory] = useUpdateCategoryMutation()
const[deleteCategory] = useDeleteCategoryMutation()

const handleCreateCategory = async(e)=>{
    e.preventDefault()
    if (!name) {
        toast.error("Name is required")
        return
    }
    try {
        const result = await createCategory({name}).unwrap()
       
        if (result.error) {
            toast.error(result.error)
        }else{
            setName("")
            toast.success(`${result.newCategory
              .name} is created`)
            refetch()
        }
        
    } catch (error) {
        console.log(error);
        toast.error("Creating category failed, try again")
    }
}

const handleUpdateCategory = async (e) => {
    e.preventDefault();

    if (!updatingName) {
      toast.error("Category name is required");
      return;
    }

    try {
      const result = await updateCategory({
        id : seletedCategory._id,
        updatedCategory : {
          name : updatingName,
        },
      }).unwrap();


      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(`${result.name} is updated`);
        setSelectedCategory(null);
        setUpdatingName("");
        setModalVisible(false);
        refetch()
      }
    } catch (error) {
      console.error(error);
    }
  };


const handleDeleteCategory = async () => {
    try {
      const result = await deleteCategory(seletedCategory._id).unwrap();
     
      
      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success(`${result.remove.name} is deleted.`);
        setSelectedCategory(null);
        setModalVisible(false);
        refetch()
      }
    } catch (error) {
      console.error(error);
      toast.error("Category delection failed. Tray again.");
    }
  };
  return (
    <div className="ml-[10rem] flex flex-col md:flex-row">
    {/* <AdminMenu /> */}
    <div className="md:w-3/4 p-3">
      <div className="h-12">Manage Categories</div>
      <CategoryForm
        value={name}
        setValue={setName}
        handleSubmit={handleCreateCategory}
      />
      <br />
      <hr />

      <div className="flex flex-wrap">
        {data?.categories?.map((category) => (
          <div key={category._id}>
            <button
              className="bg-white border border-pink-500 text-pink-500 py-2 px-4 rounded-lg m-3 hover:bg-pink-500 hover:text-white focus:outline-none foucs:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              onClick={() => {
                {
                  setModalVisible(true);
                  setSelectedCategory(category);
                  setUpdatingName(category.name);
                 
                }
              }}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <CategoryForm
          value={updatingName}
          setValue={(value) => setUpdatingName(value)}
          handleSubmit={handleUpdateCategory}
          buttonText="Update"
          handleDelete={handleDeleteCategory}
        />
      </Modal>
    </div>
  </div>

  )
}

export default CategoryList