import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      Welcome to Blog Website
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}
