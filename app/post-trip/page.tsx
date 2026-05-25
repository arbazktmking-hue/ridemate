"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default function PostTripPage() {
  const [destination, setDestination] = useState("");
  const [bike, setBike] = useState("");
  const [expense, setExpense] = useState("");

  const publishRide = async () => {
    try {
      await addDoc(collection(db, "trips"), {
        destination,
        bike,
        expense,
        createdAt: new Date(),
      });

      alert("Ride Published Successfully!");

      setDestination("");
      setBike("");
      setExpense("");
    } catch (error) {
      console.log(error);
      alert("Error publishing ride");
    }
  };

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
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10"
          />

          <input
            type="text"
            placeholder="Bike Name"
            value={bike}
            onChange={(e) => setBike(e.target.value)}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10"
          />

          <input
            type="text"
            placeholder="Expense Split"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            className="w-full p-4 rounded-2xl bg-zinc-900 border border-white/10"
          />

          <button
            onClick={publishRide}
            className="w-full bg-orange-500 py-4 rounded-2xl text-xl font-bold"
          >
            Publish Ride
          </button>
        </div>
      </div>
    </main>
  );
}