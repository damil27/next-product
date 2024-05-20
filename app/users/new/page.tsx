"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NewUserPage = () => {
    const router = useRouter()
  return (
      <div className='mt-8 p-5'>
          <button className='btn btn-primary' onClick={()=> router.push('/users')} > Create</button>
    </div>
  )
}

export default NewUserPage;