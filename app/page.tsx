"use client";

import { useState } from "react";

export default function PostTripPage() {
  const [destination, setDestination] = useState("");
  const [bike, setBike] = useState("");

  const publishRide = () => {
  alert("Ride Published!");
}