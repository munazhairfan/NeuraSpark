import React from 'react'
import FlippingCard from "@/components/flipping-card"

const Concepts = () => {
  return (
    <section className="m-4 md:m-12 lg:m-32">
              <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 md:mb-32 text-foreground">
                <span className="text-accent">Important</span> Concepts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FlippingCard
                  frontTitle="Prompt Engineering"
                  frontDescription="The art of crafting effective prompts"
                  backContent="Prompt engineering is the practice of designing and refining input prompts to get the best possible outputs from AI models. It involves understanding how models interpret language and optimizing queries for accuracy and relevance."
                />
                <FlippingCard
                  frontTitle="Context Engineering"
                  frontDescription="Building rich contextual frameworks"
                  backContent="Context engineering focuses on providing comprehensive background information and constraints to AI systems. It helps models understand the broader scope of a problem and generate more relevant, accurate, and contextually appropriate responses."
                />
              </div>
            </section>
  )
}

export default Concepts
