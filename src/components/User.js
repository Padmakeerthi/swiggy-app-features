import React from 'react'

const User = ({name,location}) => {
  return (
    <div className='user-card'>
    <div>Name: {name}</div>
    <h2>Address : {location}</h2>
    </div>
  )
}

export default User;