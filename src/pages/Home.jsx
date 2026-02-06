import React from "react";
import { Hero } from "../components/sections/Hero";
import { Problem } from "../components/sections/Problem";
import { RevenueLoop } from "../components/sections/RevenueLoop";
import { ExpandingCards } from '../components/sections/ExpandingCards';
import { Services } from "../components/sections/Services";
import { GooglePartner } from "../components/sections/GooglePartner";
import { SocialProof } from "../components/sections/SocialProof";


export function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <ExpandingCards />
      <Services />
      <SocialProof />
      <GooglePartner />
    </>
  );
}
