import Link from "next/link"
import Intro from "@/components/intro"


export default function Home() {
    return (
    <div>
        <Intro/>
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


