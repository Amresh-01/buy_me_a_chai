import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] ">
        <div className="font-bold text-4xl flex gap-2 justify-center items-center">Buy Me a Chai . . .<span><img src = "/tea.gif" width={88}></img></span></div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers. Start now!
        </p>
        <br></br>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
          focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
            Start Now</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 
          focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">
            Read more</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-14"> Your Fans Can Buy a Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/man.gif" className=" bg-slate-400 rounded-full p-2 text-black" width={88}></img>
            <p className="font-bold"> Fans wnat to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/coin.gif" className=" bg-slate-400 rounded-full p-2 text-black" width={88}></img>
            <p className="font-bold"> Fans wnat to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>

           <div className="item space-y-3 flex flex-col items-center justify-center">
            <img src="/group.gif" className=" bg-slate-400 rounded-full p-2 text-black" width={88}></img>
            <p className="font-bold"> Fans wnat to help</p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>
    </>
  );
}

