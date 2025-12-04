import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  const cards = [
    { title: 'Expert Debugging', desc: 'Pinpoint bugs and provide fixes with explanations.' },
    { title: 'Code Reviews', desc: 'Best-practice suggestions, refactors, and tests.' },
    { title: 'Architecture', desc: 'Scalable system designs and API schemas.' },
  ]

  const items = ['Code Review', 'Debugging', 'Refactoring', 'Career Guidance']

  return (
    <div className='min-h-screen w-full bg-[#151922]'>
      <Navbar />

      {/* Hero Section */}
      <section className='min-h-screen w-full bg-[url("/robot.png")] bg-cover bg-center flex flex-col justify-center items-center'>
        <div className='h-full w-full flex flex-col justify-center items-center pt-32 pb-20 px-6'>
          <h1 className='font-bold text-[#00ccff] text-3xl md:text-6xl text-center font-[ScienceGothic]'>
            Your Personal Senior Developer
          </h1>
          <p className='text-sm md:text-xl text-center font-[ScienceGothicLight] mt-4 max-w-2xl text-slate-300'>
            Fix bugs, review code, architect systems, and get expert-level guidance instantly.
          </p>
          <Link
            to="/chat"
            className='bg-[#00ccff] text-[#151922] px-8 py-3 rounded-full mt-8 font-semibold cursor-pointer hover:bg-[#00ccff]/80 transition-all duration-300'
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className='w-full bg-[#151922] py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <h3 className="text-2xl md:text-4xl font-semibold font-[ScienceGothic] text-center">
            Why Our AI Developer
          </h3>
          <p className="text-slate-400 text-sm md:text-lg mt-4 text-center max-w-2xl mx-auto font-[ScienceGothicLight]">
            It behaves like an experienced engineer — not a generic assistant. Get concrete code changes, design diagrams, and career mentorship.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-xl border border-slate-700 bg-[#1a1f2e] hover:border-[#00ccff]/50 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-lg bg-[#071428] flex items-center justify-center">
                  <span className="text-[#00ccff] text-xl">&#9881;</span>
                </div>
                <h4 className="mt-4 text-lg font-semibold font-[ScienceGothic]">{c.title}</h4>
                <p className="mt-2 text-sm text-slate-400 font-[ScienceGothicLight]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="w-full bg-[#0f131a] py-20 px-6">
        <div className='max-w-6xl mx-auto'>
          <h3 className="text-2xl md:text-4xl font-semibold font-[ScienceGothic] text-center">
            What It Can Do
          </h3>
          <p className="text-slate-400 mt-4 text-sm md:text-lg text-center font-[ScienceGothicLight]">
            Capabilities focused on what developers, teams, and learners need every day.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((it) => (
              <div
                key={it}
                className="rounded-xl border p-6 text-center border-slate-700 bg-[#1a1f2e] hover:border-[#00ccff]/50 transition-all duration-300"
              >
                <div className="h-12 w-12 mx-auto rounded-lg bg-[#071428] flex items-center justify-center">
                  <span className="text-[#00ccff] text-xl">&#9881;</span>
                </div>
                <p className="mt-4 font-medium font-[ScienceGothic]">{it}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home