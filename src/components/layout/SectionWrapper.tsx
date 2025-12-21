import React from "react";

const SectionWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`py-24 ${className}`}>
      <div className="container mx-auto px-6 max-w-7xl">{children}</div>
    </section>
  );
};

export default SectionWrapper;
