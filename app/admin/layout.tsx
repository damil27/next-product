import React, { ReactNode } from 'react'



interface Props{
    children: ReactNode;
}
const layout = ({children}:Props) => {
  return (
      <div className='flex'>
          <aside className='bg-slate-500 p-4'> side bar here</aside>
          <main>{children}</main>
    </div>
  )
}

export default layout