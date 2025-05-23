import SolutionsCard from "./solutionsCard";

export default function Component() {
  return (
    <div className="bg-black antialiased p-6">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Our Solutions</h1>
        <p className="text-gray-400">Delivering innovative IT solutions for your business needs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        <SolutionsCard
          solution={{
            image: "/images/Golden-Pheasant.jpg",
            title: "Gyan Kosh",
            description: "School Mangement System",
            learnMoreUrl: "",
          }}
        />
        <SolutionsCard
          solution={{
            image: "/images/Golden-Pheasant.jpg",
            title: "Gyan Kosh",
            description: "School Mangement System",
            learnMoreUrl: "",
          }}
        />
        <SolutionsCard
          solution={{
            image: "/images/Golden-Pheasant.jpg",
            title: "Gyan Kosh",
            description: "School Mangement System",
            learnMoreUrl: "",
          }}
        />
      </div>
    </div>
  );
}
