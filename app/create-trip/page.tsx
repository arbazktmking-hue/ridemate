"use client";

import { useState } from "react";

export default function CreateTripPage() {
  const [destination, setDestination] = useState("");
  const [bike, setBike] = useState("");
  const [caption, setCaption] = useState("");

  const [tripImage, setTripImage] = useState(
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  );

  const handleTripImage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTripImage(imageUrl);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

        <h1 className="text-5xl font-black text-orange-500 mb-10">
          Create Trip 🔥
        </h1>

        <img
          src={tripImage}
          alt="Trip"
          className="w-full h-72 object-cover rounded-2xl mb-6"
        />

        <label className="cursor-pointer bg-orange-500 px-6 py-3 rounded-2xl font-bold inline-block mb-8">
          Upload Trip Photo

          <input
            type="file"
            accept="image/*"
            onChange={handleTripImage}
            className="hidden"
          />
        </label>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black border border-zinc-700"
          />

          <input
            type="text"
            placeholder="Bike Name"
            value={bike}
            onChange={(e) => setBike(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black border border-zinc-700"
          />

          <textarea
            placeholder="Write your ride story..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-4 rounded-2xl bg-black border border-zinc-700 h-40"
          />

          <button
            onClick={() => alert("Trip Posted Successfully 🔥")}
            className="w-full bg-orange-500 py-4 rounded-2xl text-xl font-black hover:scale-105 transition"
          >
            Post Trip
          </button>

        </div>

      </div>
    </main>
  );
}