import Link from "next/link";

function Header() {
    return (
        <header className="bg-blue-400 py-2 shadow-md fixed w-full">
            <ul className="container-wrapper flex flex-row gap-5">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
