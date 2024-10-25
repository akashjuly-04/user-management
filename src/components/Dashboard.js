import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
 
    const user=JSON.parse(localStorage.getItem("user"))
   
  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
        {user&&(
            <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Auth Token:</strong> {user.authToken}</p>
            </div>
        )}
        <Link to="/profile" className="text-blue-500 underline mt-4 inline-block m-2">
          Edit Profile
        </Link>

        <Link to="/todo" className="text-blue-500 underline inline-block">
          Manage Todos
        </Link>

    </div>
  )
}

export default Dashboard