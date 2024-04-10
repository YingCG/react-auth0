import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()

    // console.log(user)
    // JSON.stringify(user, null, 2)
  return (
    isAuthenticated && (
        <div>
            Hello {user.nickname}
        </div>
    )
  )
}

export default Profile