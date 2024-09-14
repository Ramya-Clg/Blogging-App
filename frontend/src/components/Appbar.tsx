import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
export const Appbar = () => {
    return <div className="border-b border-slate-300 flex justify-between px-10 py-5 cursor-pointer">
        <div className="flex flex-col justify-center text-xl font-bold">
            <Link to='/blogs'>
                Blogger
            </Link>
        </div>
        <div className="flex">
            <div className="mr-2 flex  flex-col justify-center">
                <Link to='/publish'>
                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2">Publish</button>
                </Link>
            </div>
            <div className="flex flex-col justify-center">
                <Avatar name="Ramya"></Avatar>
            </div>
        </div>
    </div>
}