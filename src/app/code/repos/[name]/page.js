import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';
import Loading from '@/app/loading';
import Link from 'next/link';
import React, { Suspense } from 'react'

const RepoPage = ({ params }) => {
    const { name } = params

    return (
        <div className='card'>
            <Link href='/code/repos' className='btn btn-black'>
                Back To {name}
            </Link>
            <Suspense fallback={<Loading />}>
                <Repo name={name} />
                <RepoDirs name={name} />
            </Suspense>

        </div>
    )
}

export default RepoPage