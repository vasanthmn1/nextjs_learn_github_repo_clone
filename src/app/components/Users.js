import React from 'react'

const Users = ({ users }) => {
    console.log(users);
    return (
        <div className='users'>
            <h1>Users</h1>
            {
                users?.map((val, idx) => {
                    return (
                        <>
                            <div className='card' key={idx}>
                                <h2>{val.name}</h2>
                                <small>username: {val.username}</small>
                                <p>{val.website}</p>
                                <p>{val.phone}</p>
                                <a className='btn' href={`mailto: ${val.email}`} target='_blank'>
                                    Email Me
                                </a>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Users