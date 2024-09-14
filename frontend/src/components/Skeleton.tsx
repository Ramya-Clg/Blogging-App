import { Circle } from "./BlogCard"

export const Skeleton = () => {
    return <div className="border-b border-slate-200 m-4 p-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex flex-col justify-center">
                <div className="h-4 w-4 bg-gray-200 rounded-full "></div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center pl-2">
                    <Circle />
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="h-2 bg-gray-200 rounded-full "></div>
            </div>
        </div>
        <div className=" text-3xl font-bold pt-2">
            <div className="h-2 bg-gray-200 rounded-full "></div>
        </div>
        <div className="text-slate-400 text-sm pt-4">
            <div className="h-10 bg-gray-200 rounded-full "></div>
        </div>
    </div>
}