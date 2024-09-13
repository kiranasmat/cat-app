import Link from "next/link";

export default function Layout({children}){


    return <div>
        
        <Link href="/dashboard/students">Student Section</Link>
        <Link href="/dashboard/teachers">Teacher Section</Link>

        {children}
    </div>

}