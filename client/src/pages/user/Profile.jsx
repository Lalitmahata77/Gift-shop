import {useUpdateUserMutation} from "../../redux/api/userApiSlice"
import {setCredintial} from "../../redux/features/userSlice"
import { useSelector,useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import {toast}  from "react-toastify"
import { Link } from "react-router-dom"
import Loader from "../../componets/Loader"
const Profile = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [updateProfile, { isLoading: loadingUpdateProfile }] = useUpdateUserMutation()
    const {userInfo} = useSelector((state)=>state.auth)
    useEffect(()=>{
        setEmail(userInfo.email),
        setName(userInfo.name)
    },[userInfo.email, userInfo.name])

    const submitHandler = async(e)=>{
        e.preventDefault()

 if (password !== confirmPassword) {
    toast.error("password do not match")
 }else{
    try {
        const res = await updateProfile({_id : userInfo._id, name,password,email}).unwrap()
        dispatch(setCredintial({...res}));
      // toast.success("Profile updated");
      navigate("/profileDetails")
    } catch (error) {
        console.log(error);
        toast.error(error.data.message || error.error)
        
    }
 }
    }
  return (
    <div className="container mx-auto p-4 mt-[10rem]">
    <div className="flex justify-center align-center md:flex md:space-x-4">
      <div className="md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input p-4 rounded-sm w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-input p-4 rounded-sm w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-input p-4 rounded-sm w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="form-input p-4 rounded-sm w-full"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
            >
              Update
            </button>

            <Link
              to="/user-orders"
              className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700"
            >
              My Orders
            </Link>
          </div>
          {loadingUpdateProfile && <Loader />}
        </form>
      </div>
    </div>
  </div>
  )
}

export default Profile