import Link from "next/link";

const InnerMenu = () => {
    return (
        <>
        <div className="innerMenu">
            <Link href='/'>Switches</Link>
            <ul>
                <li><Link href='/'>Moulded 9-pin Indian Plug with IEC connectors </Link></li>
                <li><Link href='/'>Moulded 9-pin Indian Plug with IEC connectors </Link></li>
                <li><Link href='/'>Moulded 9-pin Indian Plug with IEC connectors </Link></li>
                <li><Link href='/'>Moulded 9-pin Indian Plug with IEC connectors </Link></li>
            </ul>
        </div>
        
        </>
    )
}

export default InnerMenu;