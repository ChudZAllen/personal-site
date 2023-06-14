import Link from "next/link"


export default function Home() {
    return (
    <div>
        <h1>Hello World!</h1>
        <h2>
            <Link href='pages/about'>About Me</Link>
            <br />
            <Link href='pages/contact'>Contact Information</Link>
            <br />
            <Link href='pages/porfolio'>My Work</Link>
        </h2>
    </div>
    )
}


