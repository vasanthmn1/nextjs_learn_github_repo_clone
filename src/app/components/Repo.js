import axios from 'axios'
import React from 'react'
import { Fa, FaCodeBranch, FaEbay, FaEye, FaStar } from 'react-icons/fa'
const Repo = async ({ name }) => {

    const { data } = await axios.get(`https://api.github.com/repos/vasanthmn1/${name}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_GITHUB_ACCESS_TOKEN}`
        }
    })
    console.log(data);
    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.description == null ? "No description" : data.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <span>
                        <FaStar />{data.stargazers_count}
                    </span>

                </div>
                <div className='card-stat'>
                    <span>    <FaCodeBranch />{data.forks_count} </span>

                </div>
                <div className='card-stat'>
                    <span> <FaEye />{data.watchers_count} </span>

                </div>

            </div>
        </div>
    )
}

export default Repo