"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './loading'
import Users from './components/Users'
import UserSearch from './components/UserSearch'

export default function Home() {

  const [user, SetUser] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/users')
      SetUser(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  if (loading) {
    return <Loading />

  }
  // console.log(user.length);
  return (
    <main className={styles.main}>
      <UserSearch searchResult={(res) => SetUser(res)} />
      <Users users={user} />

    </main>
  )
}
