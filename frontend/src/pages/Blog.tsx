import { useParams } from "react-router-dom";
import { useBlogId } from "../hooks/useBlog"
import { BlogDetails } from "../components/BlogDetails";
import { Skeleton } from "../components/Skeleton";
import { Appbar } from "../components/Appbar";
export const Blog = () => {
    const { id } = useParams();
    const { blog, loading } = useBlogId({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar></Appbar>
            <div className="flex justify-center">
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    }

    return <div>
        <BlogDetails blog={blog} />
    </div>
}