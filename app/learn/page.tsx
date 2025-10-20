import React from 'react'
import SideBySideComparison from "@/components/side-by-side-comparison"

const Learn = () => {
  return (
        <section className="m-4 md:m-12 lg:m-32">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 md:mb-32 text-foreground">
            <span className="text-accent">Detailed</span> Comparisons
          </h2>
          <div className=' border-t-[1px] border-amber-400'>
          <h1 className="text-3xl md:text-4xl font-bold text-center my-12 text-foreground">
            <span className="text-accent">Prompt Engineering</span>&nbsp;&nbsp;
            <span className='text-accent text-5xl md:text-6xl'>&</span>&nbsp;
             Context Engineering
          </h1>
          </div>
          <SideBySideComparison/>
        </section>
  )
}

export default Learn
