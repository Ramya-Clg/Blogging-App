import { Avatar } from "./BlogCard"

export const Appbar = ()=>{
    return <div className="border-b border-slate-300 flex justify-between px-10 py-5">
        <div>
            Blogger
        </div>
        <div>
            <Avatar name="Ramya"></Avatar>
        </div>
    </div>
}