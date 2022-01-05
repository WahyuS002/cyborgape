import AOS from 'aos'
import Image from 'next/image'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        AOS.init()

        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [router])

    return (
        <>
            <Header title="Error 404 Not Found" />
            <section className="h-screen flex flex-col items-center justify-center">
                <Image src="/img/404.svg" width={600} height={400} alt="404 - Not Found" />
                <h1 className="text-xl lg:text-3xl text-gray-900 text-center">
                    Opps! We lost you. <br /> <span className="text-base lg:text-xl text-gray-400 font-light">Page not found.</span>{' '}
                </h1>
            </section>
        </>
    )
}
