"use client";

import React from "react";
import { motion } from "framer-motion";
import learnData from "@/app/data/concepts-learning.json"; // JSON file we just created

type Topic = {
  slug: string;
  title: string;
  paragraph: string;
  qa: {
    question: string;
    answer: string;
  }[];
};

const LearnPage: React.FC = () => {
  return (
    <section className="m-4 md:m-12 lg:m-24">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Learn AI Concepts
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          Understand the core concepts behind AI reasoning and design. Each topic includes a detailed explanation followed by common questions and answers to help reinforce your understanding.
        </p>
      </motion.div>

      {/* Topics */}
      <div className="space-y-20">
        {learnData.learnTopics.map((topic:Topic, index:number) => (
          <motion.div
            key={topic.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-6"
          >
            {/* Topic Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-accent">
              {topic.title}
            </h2>

            {/* Topic Paragraph */}
            <p className="text-foreground text-lg md:text-xl leading-relaxed">
              {topic.paragraph}
            </p>

            {/* Q&A Section */}
            <div className="space-y-4 mt-4">
              {topic.qa.map((item:{question: string; answer: string;}, i:number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="p-4 bg-[rgba(255,230,92,0.05)] border border-accent/30 rounded-2xl"
                >
                  <p className="font-semibold text-accent mb-2">
                    Q: {item.question}
                  </p>
                  <p className="text-foreground">A: {item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearnPage;
