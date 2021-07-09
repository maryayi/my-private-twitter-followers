import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-blue-700 text-2xl">My private twitter followers</h1>
      <button className="text-white bg-blue-900 hover:bg-blue-500 rounded p-2">Login with Twitter</button>
    </div>
  )
}
