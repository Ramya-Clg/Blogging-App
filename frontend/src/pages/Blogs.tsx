import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlog } from "../hooks/useBlog"
import { Skeleton } from "../components/Skeleton";

export const Blogs = () => {

    const { loading, blogs } = useBlog();

    if (loading) {
        return <div>
            <Appbar></Appbar>
            <div className="flex justify-center">
                <div>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </div>
    }
    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div>
                {blogs.map(blog =>
                    <BlogCard
                        authorName={blog.author.name || "Anonymous"}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"14th september 2024"}
                        id={blog.id}
                    />
                )}
            </div>
        </div>
    </div>
};
