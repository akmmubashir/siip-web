import React from "react";
import { Navigation } from "@/app/components/siip/Navigation";
import { Footer } from "@/app/components/siip/Footer";
import SignalPostPage from "@/app/components/siip/SignalPostPage";

const page = async ({ params }: { params: Promise<{ signal: string }> }) => {
  const { signal } = await params;
  return (
    <div className="bg-black text-white">
      <Navigation />
      <SignalPostPage signal={signal} />
      <Footer />
    </div>
  );
};

export default page;
