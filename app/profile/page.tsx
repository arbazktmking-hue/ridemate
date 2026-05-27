"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/200"
  );
const [bikeImage, setBikeImage] = useState(
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop"
);
  const handleImageUpload = (
    const handleBikeUpload = (
  event: React.ChangeEvent<HTMLInputElement>
) => {
  const file = event.target.files?.[0];

  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setBikeImage(imageUrl);
  }
};
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">

        <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

          <div className="flex flex-col items-center">

            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-orange-500 object-cover"
            />

            <label className="mt-6 cursor-pointer bg-orange-500 px-6 py-3 rounded-2xl font-bold hover:scale-105 transition">
              Upload Profile Photo

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            <h1 className="text-4xl font-black mt-6">
              Arbhaz Pasha
            </h1>

            <p className="text-zinc-400 mt-2">
              Adventure Rider • Mountain Explorer • KTM Lover
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            <div className="bg-black rounded-2xl p-6">
            <img
  src={bikeImage}
  alt="Bike"
  className="w-full h-64 object-cover rounded-2xl mb-4"
/>

<label className="cursor-pointer bg-orange-500 px-4 py-2 rounded-xl font-bold inline-block mb-4">
  Upload Bike Photo

  <input
    type="file"
    accept="image/*"
    onChange={handleBikeUpload}
    className="hidden"
  />
</label>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                Bike Details
              </h2>

              <p>🏍 KTM Duke 390</p>
              <p>⚡ Top Speed: 170 km/h</p>
              <p>⛽ Mileage: 28 km/l</p>
              <p>🛣 Favorite Route: Tawang</p>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                Ride Stats
              </h2>

              <p>📍 Trips Completed: 24</p>
              <p>🌍 States Covered: 8</p>
              <p>🛣 Total Distance: 18,400 km</p>
              <p>🔥 Longest Ride: Bangalore → Tawang</p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}