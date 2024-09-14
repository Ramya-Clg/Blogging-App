import { blog } from "../hooks/useBlog"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const BlogDetails = ({ blog }: { blog: blog }) => {

    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-8 max-w-screen-xl">
                <div className="col-span-8 p-10">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="py-2 text-slate-500">
                        posted on some 2nd jan 2022
                    </div>
                    <div>
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4 p-10">
                    <div className="font-semibold text-lg">
                        Author
                    </div>
                    <div className="flex justify-center">
                        <div className="pr-3 flex flex-col justify-center">
                            <Avatar name={blog.author.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-slate-500">
                                random cathcphrase about the authors ability to captivate users
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}