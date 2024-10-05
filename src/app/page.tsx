"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container w-full">
      <div className="relative w-full h-96">
        <img
          src="https://images.unsplash.com/photo-1483192683197-083ca7511846?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Sail Into Luxury and Adventure!
          </h1>
          <p className="text-white text-lg mb-6">
            Discover new horizons with a perfect mix of relaxation and
            exploration aboard our world-class cruise ships. Adventure awaits!
          </p>
          <Button className="py-2 px-4 w-40 rounded-full">Book Today</Button>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 bg-red-500"></div>
        <div className="w-1/2 bg-green-500">
          <h1>section</h1>
        </div>
      </div>
    </div>
  );
}
