"use client";

import { useState } from "react";

export default function PostTripPage() {
  const [destination, setDestination] = useState("");
  const [bike, setBike] = useState("");

  return (
    <main className="min-h-screen bg-black text-white px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-10 text-orange-500">
          Post A Ride
        </h1>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-4 rounded-2xl bg-zinc-900"
          />

          <input
            type="text"
            placeholder="Bike Name"
            value={bike}
            onChange={(e) => setBike(e.target.value)}
            className="w-full p-4 rounded-2xl bg-zinc-900"
          />

          <button
            onClick={() => alert("Ride Published!")}
            className="w-full bg-orange-500 py-4 rounded-2xl text-xl font-bold"
          >
            Publish Ride
          </button>
        </div>
      </div>
    </main>
  );
}