import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface blog {
    "content": string;
    "title": string;
    "authorId": string;
    "id": string
    "author": {
        "name": string;
    }
}

export function useBlogId({ id }: { id: string }) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    }, [id]);

    return {
        loading, blog
    }
}

export function useBlog() {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    }, []);

    return {
        loading, blogs
    }
}