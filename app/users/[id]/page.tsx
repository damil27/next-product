import { notFound } from 'next/navigation'
import React from 'react'

interface idProps{
    params:{id: number}
}

const UserDetail = ({ params: { id } }: idProps) => {
  if(id > 10) return notFound()
  return (
      <div>UserDetail : { id}</div>
  )
}

export default UserDetail