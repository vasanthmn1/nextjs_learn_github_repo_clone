
import axios from 'axios'
import React, { useState } from 'react'

const UserSearch = ({ searchResult }) => {
    const [query, setQuery] = useState('')

    const handleSumit = async (e) => {
        e.preventDefault()


        // setQuery(e.target.value)
        const res = await axios.get(`/api/users/search?query=${query}`)
        searchResult(res.data)
    }
    console.log("df", query);
    return (
        <div>UserSearch
            <form onSubmit={handleSumit}>
                <input type='text' name='query'
                    className='search-input'
                    value={query}
                    onChange={e => setQuery(e.target.value)} placeholder='Search by username' />
                <button type='submit' className='search-button'>Search</button>
            </form>
        </div>
    )
}

export default UserSearch