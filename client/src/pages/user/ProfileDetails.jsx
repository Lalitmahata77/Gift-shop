import React from 'react'
import { useSelector } from 'react-redux'

const ProfileDetails = () => {
    const {userInfo} = useSelector(state=>state.auth)
  return (
    <div className=" overflow-hidden shadow rounded-lg border">
    <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-white">
            User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white">
                    Full name
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                    {userInfo?.name}
                </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-white">
                    Email address
                </dt>
                <dd className="mt-1 text-sm text-white sm:mt-0 sm:col-span-2">
                   {userInfo?.email}
                </dd>
            </div>
            
            
        </dl>
    </div>
</div>
  )
}

export default ProfileDetails