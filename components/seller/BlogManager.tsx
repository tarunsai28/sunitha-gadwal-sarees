"use client";

import { useState, useEffect } from "react";
import { BlogPost } from "@/data/blogPosts";
import BlogPostForm from "./BlogPostForm";
import { Plus, Edit2, Trash2, Loader2 } from "lucide-react";
import Image from "next/image";

async function mutate(body: object): Promise<BlogPost[]> {
    const res = await fetch("/api/blog-posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Request failed");
    }
    return res.json();
}

export default function BlogManager() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPost, setCurrentPost] = useState<Partial<BlogPost> | undefined>(undefined);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/blog-posts")
            .then((res) => res.json())
            .then(setPosts)
            .catch(() => setError("Couldn't load articles."))
            .finally(() => setLoading(false));
    }, []);

    const handleAddNew = () => {
        setCurrentPost(undefined);
        setIsEditing(true);
    };

    const handleEdit = (post: BlogPost) => {
        setCurrentPost(post);
        setIsEditing(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this article?")) return;
        setError("");
        try {
            setPosts(await mutate({ action: "delete", id }));
        } catch (err) {
            setError(err instanceof Error ? err.message : "Couldn't delete this article.");
        }
    };

    const handleSave = async (post: BlogPost) => {
        setError("");
        try {
            if (currentPost && currentPost.id) {
                setPosts(await mutate({ action: "update", post }));
            } else {
                setPosts(await mutate({ action: "add", post }));
            }
            setIsEditing(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Couldn't save this article.");
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20 text-gray-400">
                <Loader2 size={24} className="animate-spin mr-2" /> Loading articles...
            </div>
        );
    }

    return (
        <>
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                    {error}
                </div>
            )}
            {isEditing ? (
                <div className="max-w-4xl mx-auto">
                    <BlogPostForm
                        initialData={currentPost}
                        onSave={handleSave}
                        onCancel={() => setIsEditing(false)}
                    />
                </div>
            ) : (
                <>
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-serif text-brand-black">Journal Articles</h2>
                            <p className="text-gray-500 text-sm mt-1">Publish stories to your site&apos;s Journal page</p>
                        </div>
                        <button
                            onClick={handleAddNew}
                            className="flex items-center gap-2 px-5 py-2.5 bg-brand-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                        >
                            <Plus size={18} /> Write New Article
                        </button>
                    </div>

                    {posts.length === 0 ? (
                        <div className="text-center py-16 text-gray-400 bg-white rounded-xl border border-gray-200">
                            No articles yet — click &quot;Write New Article&quot; to publish your first one.
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Cover</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Title</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Published</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {posts.map((post) => (
                                            <tr key={post.id} className="hover:bg-gray-50 group transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="w-16 h-11 bg-gray-100 rounded overflow-hidden relative border border-gray-200">
                                                        {post.coverImage && (
                                                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <h3 className="font-bold text-gray-900">{post.title}</h3>
                                                    <span className="text-xs text-gray-500 font-mono">/blog/{post.slug}</span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-700 text-sm">
                                                    {new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" })}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-3">
                                                        <button
                                                            onClick={() => handleEdit(post)}
                                                            className="p-2 text-gray-500 hover:text-brand-maroon hover:bg-brand-maroon/5 rounded-full transition-colors"
                                                            title="Edit"
                                                        >
                                                            <Edit2 size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(post.id)}
                                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                            title="Delete"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
}
