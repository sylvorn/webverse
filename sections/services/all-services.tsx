"use client";
import ServiceCard, { serviceCardProps } from "./service-card";
import AllServicesSkeleton from "./all-services-skeleton";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data) as Promise<serviceCardProps[]>;

export default function Services() {
  const { data, isLoading } = useSWR("/api/services", fetcher);

  if (isLoading || !data) return <AllServicesSkeleton />;

  return (
    <div className="py-20 lg:py-20 bg-black antialiased">
      <div className="text-center text-white mb-3">
        <h1 className="text-3xl font-bold">Empowering Your Vision with Innovative Solutions</h1>
        <p className="text-gray-400">Our diverse team of experts is dedicated to providing tailored, high-quality services that drive success.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto md:px-8 w-full p-6">
        {data.map((s: serviceCardProps) => {
          return <ServiceCard id={s.id} name={s.name} description={s.description} />;
        })}
      </div>
    </div>
  );
}
