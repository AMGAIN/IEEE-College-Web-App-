'use client'
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "@/components/homePageComponents/Hero";
import UpcomingEvents from "@/components/homePageComponents/UpcomingEvents";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <UpcomingEvents />
    </div>
  );
}
