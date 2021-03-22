// import { getSession } from 'next-auth/client'
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'

import ProfileForm from './profile-form'
import classes from './user-profile.module.css'

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true)
  // const router = useRouter()

  // useEffect(() => {
  //   getSession().then((session) => {
  //     if (!session) {
  //       // router.push('/auth')
  //       window.location.href = '/auth'
  //     } else {
  //       setIsLoading(false)
  //       // router.push('/profile')
  //     }
  //   })
  // }, [])

  // // console.log(loading, session)

  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }

  const changePasswordHandler = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    console.log(data)
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  )
}

export default UserProfile
