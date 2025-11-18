import Navbar from '@/components/Navbar'
import { getServerSession } from '@/lib/utils/auth'
import React from 'react'

const AdminPage = async () => {
    const user = await getServerSession()
  return (
    <div>
        <Navbar user={user} isScrolled={true} />
        <div className='mt-16'>lorem1000</div>
    </div>
  )
}

export default AdminPage