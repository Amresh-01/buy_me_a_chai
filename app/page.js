"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-center flex-col items-center text-white h-[44vh]">
        <div className="font-bold text-4xl flex gap-2 justify-center items-center">
          Buy Me a Chai . . .
          <Image src="/tea.gif" alt="Tea icon" width={88} height={88} />
        </div>
        <p className="mt-2 text-center max-w-xl">
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/start">
            <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Start Now
            </button>
          </Link>
          <Link href="/about">
            <button type="button" className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10 my-10" />

      {/* Features Section */}
      <section className="text-white container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-14">
          Your Fans Can Buy You a Chai
        </h1>

        <div className="flex gap-5 justify-around flex-wrap">
          {[
            { src: "/man.gif", title: "Fans want to help", desc: "Your fans are eager to support you." },
            { src: "/coin.gif", title: "Easy Monetization", desc: "Turn appreciation into income effortlessly." },
            { src: "/group.gif", title: "Community Driven", desc: "Let your supporters rally behind you." },
          ].map((item, index) => (
            <div key={index} className="space-y-3 flex flex-col items-center justify-center">
              <Image src={item.src} alt={item.title} width={88} height={88} className="bg-slate-400 rounded-full p-2" />
              <p className="font-bold text-center">{item.title}</p>
              <p className="text-center max-w-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}