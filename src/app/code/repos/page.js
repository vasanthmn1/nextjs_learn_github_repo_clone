import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Fa, FaCodeBranch, FaEbay, FaEye, FaStar } from 'react-icons/fa'
const Repo = async () => {
    const { data } = await axios.get(`https://api.github.com/users/vasanthmn1/repos`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_GITHUB_ACCESS_TOKEN}`
        }

    })
    // const resons = await fetch('https://api.github.com/users/vasanthmn1/repos', {
    //     next: {
    //         revalidate: 60
    //     }
    // })
    // const datas = await resons.json()
    console.log(data);
    return (
        <div className='repos-container'>
            <h2>Reposiitories</h2>
            <ul className='repo-list'>
                {
                    data.map((val, idx) => {
                        return (
                            <>
                                <li>
                                    <Link href={`/code/repos/${val.name}`}>{val.name}
                                        <p>{val.description}</p>
                                        <div className='repo-details'>
                                            <span>
                                                <FaStar />{val.stargazers_count}
                                            </span>
                                            <span>
                                                <FaCodeBranch />{val.forks_count}
                                            </span>
                                            <span>
                                                <FaEye />{val.watchers_count}
                                            </span>
                                        </div>
                                    </Link>
                                    {/* <p>Language: {val.language}</p>
                                        <p>Stars: {val.stargazers_count}' */}
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Repo