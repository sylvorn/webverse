"use client";
import fetcher from "@/fetcher";
import useSWR from "swr";
import BlogListCard from "./BlogListCard";

export default function BlogList() {
  const { data, isLoading } = useSWR(`/api/blogs`, fetcher);

  if (isLoading) return <p>Loading</p>;

  return (
    <div className="py-20 lg:py-20 bg-black antialiased">
      {/* <div className="text-center text-white mb-3">
        <h1 className="text-3xl font-bold">Empowering Your Vision with Innovative Solutions</h1>
        <p className="text-gray-400">Our diverse team of experts is dedicated to providing tailored, high-quality services that drive success.</p>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto md:px-8 w-full p-6">
        {data.map((blog: any) => {
          return <BlogListCard title={blog.title} brief={blog.brief} likes={blog.clap} id={blog.id} imageUrl={"https://miro.medium.com/v2/resize:fit:1400/0*Sc0N6_W7HF8Ga0yh.jpg"} />;
        })}
      </div>
    </div>
  );
}
