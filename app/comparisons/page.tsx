"use client";

import React from "react";
import { motion } from "framer-motion";
import topicsData from "@/app/data/topics.json";

type ComparisonPoint = {
  aspect: string;
  [key: string]: string; // allows any additional string fields like prompt/context/cot/tot/etc.
};
const ComparisonsPage: React.FC = () => {
  const comparisons = topicsData.topics.filter((t) => t.comparison);

  return (
    <section className="m-4 md:m-12 lg:m-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Concept Comparisons
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Explore how different AI reasoning and design concepts relate and contrast with each other — all summarized side by side.
        </p>
      </motion.div>

      {/* Comparisons */}
      <div className="space-y-24">
        {Array.from(
          new Map(comparisons.map((t) => [t.comparison.title, t])).values()
          ).map((topic, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-1 md:p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Comparison Title */}
            <h2 className="text-3xl font-semibold text-accent mb-10 text-center">
              {topic.comparison.title}
            </h2>

            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-xs md:text-[16px]">
              <div className="bg-[rgba(255,230,92,0.15)] border border-accent/30 rounded-2xl px-3 py-1 md:px-4 md:py-2 text-center font-bold text-accent">
                Aspect
              </div>
              <div className="bg-[rgba(255,230,92,0.15)] border border-accent/30 rounded-2xl px-3 py-1 md:px-4 md:py-2 text-center font-bold text-accent">
                {
                  Object.keys(topic.comparison.points[0])[1]
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }
              </div>
              <div className="bg-[rgba(255,230,92,0.15)] border border-accent/30 rounded-2xl px-3 py-1 md:px-4 md:py-2 text-center font-bold text-accent">
                {
                  Object.keys(topic.comparison.points[0])[2]
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                }
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {topic.comparison.points.map((point: ComparisonPoint, i: number) => {
                const leftKey = Object.keys(point)[1];
                const rightKey = Object.keys(point)[2];
                const aspect =
                  point.aspect ||
                  `Aspect ${i + 1}`;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="grid grid-cols-3 gap-3 md:gap-4 items-center"
                  >
                    {/* Aspect */}
                    <div className="h-24 flex justify-center items-center text-center text-[10px] md:text-base bg-[rgba(255,230,92,0.05)] border border-accent/30 rounded-xl px-1 py-[3px] md:py-3 md:px-2 font-semibold text-accent">
                      {aspect}
                    </div>

                    {/* Left */}
                    <div className="h-24 flex justify-center items-center text-center text-[10px] md:text-base bg-[rgba(255,230,92,0.05)] border border-accent/30 rounded-xl px-1 py-[3px] md:py-3 md:px-4 text-foreground leading-relaxed">
                      {point[leftKey]}
                    </div>

                    {/* Right */}
                    <div className="h-24 flex justify-center items-center text-center text-[10px] md:text-base bg-[rgba(255,230,92,0.05)] border border-accent/30 rounded-xl px-1 py-[3px] md:py-3 md:px-4 text-foreground leading-relaxed">
                      {point[rightKey]}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonsPage;
