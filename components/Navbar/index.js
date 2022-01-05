import Image from 'next/image'
import Link from 'next/link'
import HamburgerMenu from '../HumbergerMenu'

export default function Navbar() {
    return (
        <>
            <div className="px-8 md:px-20">
                <nav className="hidden md:flex items-center justify-between">
                    <Image src="/img/logo.svg" width={200} height={200} alt="Cyborg Ape's Logo" />
                    <ul className="flex items-center space-x-10 font-semibold">
                        <li>
                            <a href="#home" className="text-secondary hover:text-dark transition-all duration-300 ease-in-out">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#roadmap" className="text-secondary hover:text-dark transition-all duration-300 ease-in-out">
                                Roadmap
                            </a>
                        </li>
                        <li>
                            <a href="#faq" className="text-secondary hover:text-dark transition-all duration-300 ease-in-out">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <Link href="/soon" passHref={true}>
                                <a type="button" className="text-secondary hover:text-dark transition-all duration-300 ease-in-out">
                                    Coming Soon
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <a
                        type="button"
                        href="https://opensea.io/collection/cyborgape"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-secondary hover:bg-gray-700 transition-all duration-300 ease-in-out px-6 py-3 rounded-lg text-white font-bold shadow-xl shadow-secondary/30"
                    >
                        Connect Now
                    </a>
                </nav>
                <div className="flex md:hidden justify-between items-center w-full p-4">
                    <p className="text-sm font-bold uppercase">Cyborg Ape</p>
                    <HamburgerMenu />
                </div>
            </div>
        </>
    )
}
