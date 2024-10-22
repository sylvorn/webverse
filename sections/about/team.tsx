import { FocusCards } from "@/components/ui/focus-cards";

export function Team() {
  const cards = [
    {
      title: "Jenil Desai",
      src: "images/jenil-desai.jpg",
    },
    {
      title: "Ravi Sorathiya",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Ravi Sorathiya",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="p-6 bg-black antialiased">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Meet the Minds Behind the Magic</h1>
        <p className="text-gray-400">A passionate team committed to bringing your vision to life.</p>
      </div>
      <FocusCards cards={cards} />
    </div>
  );
}
