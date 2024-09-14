import { BlogCard } from "../components/BlogCard"
import { Appbar } from "../components/Appbar"
import { useBlog } from "../hooks/useBlog"
export const Blogs = () => {

    const {loading,blogs} = useBlog();  

    if(loading){
        return <div>
            loading....
        </div>
    }

    return <div>
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard
                    authorName={"Ramya Shah"}
                    title={"How an ugly simple page website makes $5000 a month with affiliate marketing"}
                    content={"How an ugly simple page website makes $5000 a month with affiliate marketingHow an ugly simple page website makes $5000 a month with affiliate marketingHow an ugly simple page website makes $5000 a month with affiliate marketingHow an ugly simple page website makes $5000 a month with affiliate marketing1How an ugly simple page website makes $5000 a month with affiliate marketingHow an ugly simple page website makes $5000 a month with affiliate marketingHow an ugly simple page website makes $5000 a month with affiliate marketingHow an ugly simple page website makes $5000 a month with affiliate marketing1"}
                    publishedDate={"14th september 2024"}
                />
            </div>
        </div>
    </div>
}