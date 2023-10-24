import Link from 'next/link';


export default function Navbar({ }) {
    return (
        <div className="header-2">
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <Link href="/" className={`p-2 lg:px-4 md:mx-2 `}>Home</Link>
                        <Link href="/posts/post-1" className={`p-2 lg:px-4 md:mx-2 `}>Post 1</Link>
                        <Link href="/posts/post-2" className={`p-2 lg:px-4 md:mx-2 `}>Post 2</Link>
                        <Link href="/posts/post-3" className={`p-2 lg:px-4 md:mx-2 `}>Post 3</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}



