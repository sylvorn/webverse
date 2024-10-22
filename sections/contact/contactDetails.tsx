import Grid from "./components/grid";
import Details from "./details";
import Form from "./form";

export default function ContactDetails() {
  return (
    <div className="py-20 lg:py-20 bg-black antialiased">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-20 max-w-7xl h-full mx-auto p-3">
        <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
          <Grid size={20} />
          <Details />
        </div>
        <div className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden">
          <Grid size={20} />
          <Form />
        </div>
      </div>
    </div>
  );
}
