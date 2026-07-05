import React from "react";
interface PageHeroProps {
  title: string;
  image: string;
  label: string;
  description: string;
}
const PageHero = ({ title, image, label, description }: PageHeroProps) => {
  return (
    <section className="relative py-32 lg:py-40 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-[#001220]"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={title}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#001220]/92 via-[#00629B]/50 to-[#001220]/88" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 bg-white/15 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
          {label}
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-lg text-white/72 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;