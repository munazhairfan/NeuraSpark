"use client";

import React from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FlippingCard from "@/components/flipping-card";
import topicsData from "@/app/data/topics.json";

export default function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const topic = topicsData.topics.find((t) => t.slug === slug);

  if (!topic) return notFound();

  // Helper to render comparison rows generically
  const renderComparisonRows = (points: Array<Record<string, string>>) => {
    // Determine left/right keys using first object's keys order
    const sample = points[0] || {};
    // If the object has an "aspect" or similar key, treat first key as left/right mapping
    // Strategy: pick first two keys as left/right if there are exactly 2; otherwise, map values directly
    return points.map((p, idx) => {
      const vals = Object.values(p);
      // If there are exactly 2 values, treat them as left/right
      if (vals.length === 2) {
        return (
          <div
            key={idx}
            className="grid grid-cols-3 gap-4 items-center bg-card border-2 border-accent/50 rounded-2xl p-4"
          >
            <div className="font-semibold text-foreground">{/* aspect or title */}</div>
            <div className="text-foreground text-sm leading-relaxed">{vals[0]}</div>
            <div className="text-foreground text-sm leading-relaxed">{vals[1]}</div>
          </div>
        );
      }

      // Fallback: show all key/value pairs horizontally
      return (
        <div key={idx} className="bg-card border-2 border-accent/50 rounded-2xl p-4">
          {Object.entries(p).map(([k, v]) => (
            <p key={k} className="text-foreground text-sm leading-relaxed">
              <strong className="text-accent mr-2">{k}:</strong> {v}
            </p>
          ))}
        </div>
      );
    });
  };

  return (
    <section className="m-4 md:m-12 lg:m-32">
      {/* Back */}
      <div className="mb-8">
        <Link
          href="/concepts"
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Topics
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{topic.title}</h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          {topic.overview}
        </p>
      </motion.div>

      {/* Definition / Flipping Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold mb-4 text-accent">Core Concepts</h2>

        {topic.flippingCards && topic.flippingCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topic.flippingCards.map((card, i) => (
              <FlippingCard
                key={i}
                frontTitle={card.frontTitle}
                frontDescription={card.frontDescription}
                backContent={card.backContent}
              />
            ))}
          </div>
        ) : (
          <p className="text-foreground">No cards available for this topic.</p>
        )}
      </motion.div>

      {/* Circular Buttons */}
      {topic.circularButtons && topic.circularButtons.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-6 text-accent">Explore</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topic.circularButtons.map((btn, i) => (
              <div
                key={i}
                className="bg-card border-2 border-accent/50 rounded-2xl py-6 px-2 flex items-start gap-4"
              >
                <div className="w-8 h-8 p-4 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{btn.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{btn.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
