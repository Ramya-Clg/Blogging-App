import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    return <div className="flex justify-center flex-col">
        <Appbar></Appbar>
        <div className="flex justify-center">
            <div className="max-w-screen-lg w-full">
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default input</label>
                    <input onChange={(e) =>
                        setTitle(e.target.value)
                    } type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <div>
                    <Textarea onChange={(e) =>
                        setDescription(e.target.value)
                    }></Textarea>
                </div>
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content: description
                    }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}

function Textarea({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return <div>
        <div>
            <div className="mb-2 rounded-b-lg">
                <textarea onChange={onChange} rows={8} className="p-2.5 max-w-screen-lg w-full text-sm text-gray-800 bg-white border-1" placeholder="Write an article..." required ></textarea>
            </div>
        </div>

    </div >
}