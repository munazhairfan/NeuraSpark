"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import topicsData from "@/app/data/topics.json";

const TopicsPage = () => {
  return (
    <section className="m-4 md:m-12 lg:m-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Explore <span className="text-accent">AI Concepts</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Learn key principles like Prompt Engineering, Context Engineering, and
          advanced reasoning methods in Large Language Models.
        </p>
      </motion.div>

      {/* Topic Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {topicsData.topics.map((topic, i) => (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="group relative bg-card border border-accent/30 rounded-3xl p-8 shadow-md hover:shadow-accent/30 hover:border-accent transition-all duration-300"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {topic.title}
              </h2>
            </div>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              {topic.overview.length > 160
                ? topic.overview.slice(0, 160) + "..."
                : topic.overview}
            </p>

           {/* Navigate Button */}
            <Link
              href={`/concepts/${topic.slug}`}
              className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors"
            >
              Explore
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Subtle gradient accent on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-accent to-transparent rounded-3xl transition-opacity" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TopicsPage;
