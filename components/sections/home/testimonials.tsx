"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="antialiased bg-black p-6">
      <div className="text-center text-white mb-6">
        <h1 className="text-3xl font-bold">Loved by thousands of people</h1>
        <p className="text-gray-400">Here's what some of our users have to say about Sylvorn</p>
      </div>
      <div className="h-[40rem] flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
        <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
