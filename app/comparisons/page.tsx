import React from 'react'
import CircularComparison from "@/components/circular-comparison"

const Comparison = () => {
  return (
        <section className="m-32">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-32 text-foreground">
            <span className="text-accent">Circular</span> Comparisons
          </h2>
          <div className=' border-t-[1px] border-amber-400'>
          <h1 className="text-3xl md:text-4xl font-bold text-center my-12 text-foreground">
            <span className="text-accent">Prompt Engineering</span>&nbsp;&nbsp;
            <span className='text-accent text-5xl md:text-6xl'>&</span>&nbsp;
             Context Engineering
          </h1>
          </div>
          <CircularComparison />
        </section>
  )
}

export default Comparison
