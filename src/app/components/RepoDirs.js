import React from 'react'

import axios from 'axios'
import Link from 'next/link';
import { FaFolder, FaRegFile } from 'react-icons/fa';

const RepoDirs = async ({ name }) => {
    const { data } = await axios.get(`https://api.github.com/repos/vasanthmn1/${name}/contents`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_GITHUB_ACCESS_TOKEN}`
        }
    })
    console.log(data);
    // const { data }

    console.log("hello");
    console.log(data);
    // useEffect(() => {

    // }, [])
    return (
        <>
            <h3 className=''>
                Contents
            </h3>
            <ul>
                {
                    data.map((val, idx) => {
                        return (
                            <li key={idx}>
                                <Link target='_blank' href={val.html_url} >
                                    {val.type == "dir" ? <FaFolder /> : <FaRegFile />}
                                    <span>{val.name}</span>
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>

        </>
    )
}

export default RepoDirs