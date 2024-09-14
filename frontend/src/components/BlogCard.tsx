interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <div className="border-b border-slate-200 m-4 p-4">
        <div className="flex">
            <div className="flex flex-col justify-center">
                <Avatar name={authorName} />
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-extralight pl-2">
                    {authorName}
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center pl-2">
                    <Circle />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-light pl-2  text-slate-500">
                    {publishedDate}
                </div>
            </div>
        </div>
        <div className=" text-3xl font-bold pt-2">
            {title}
        </div>
        <div className="font-light">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-400 text-sm pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
    </div>
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">
    </div>
}

export function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-sm text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}