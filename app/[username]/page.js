"use client";

import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  return (
    <>
      <div className="cover w-full bg-red-50">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/18.gif?token-hash=FLx2_6ANBGtfQXJkVF40tXYgAyG3oEdIZttZP6eIexw%3D&token-time=1756944000"
          alt="Cover"
        />
        <div className="absolute bottom-32 right-[47%] ">
          <img
            width={85}
            height={85}
            className="rounded-full"
            src="https://imgs.search.brave.com/h1jh963LQ3I0xTn0NJB6VzBBRFs58ZmYdXCzKZM_cqw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/MTg1LzY4Mi9zbWFs/bC9tYW4taW4tbW90/b2Nyb3NzLWhlbG1l/dC1yYWNlci1yaWRl/ci1jeWNsaXN0LWNv/bmNlcHQtc3VpdGFi/bGUtZm9yLWF2YXRh/ci1wcm9maWxlcy10/LXNoaXJ0LWRlc2ln/bi1wcmludC1zdGlj/a2VyLXBvc3Rlci12/ZWN0b3IuanBn"
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 mb-32 flex-col ">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          9,719 memebers 82 Posts $15,450 releases
        </div>
        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            <h2 className="text-2xl font-bold my-5">Supporters</h2>
            <ul className="mx-5">
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="avatar.gif" alt="user-avatar" />
                <span>
                  Shubham denoted <span className="font-bold">₹30</span> with a
                  message "I support you Bro. Lots of 🩷"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="avatar.gif" alt="user-avatar" />
                <span>
                  Shubham denoted <span className="font-bold">₹30</span> with a
                  message "I support you Bro. Lots of 🩷"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={40} src="avatar.gif" alt="user-avatar" />
                <span>
                  Shubham denoted <span className="font-bold">₹30</span> with a
                  message "I support you Bro. Lots of 🩷"
                </span>
              </li>
            </ul>
          </div>
          <div className="make-payment w-1/2 bg-slate-900 rounded-lg p-10 text-white">
            <h2 className="text-2xl font-bold my-5">Make Payment </h2>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Message"
              />
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Amount"
              />
              <button
                type="button"
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
              >
                Pay
              </button>
              <div className="flex gap-2 mt-5">
                <button className="bg-slate-800 rounded-lg p-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Pay ₹20
                </button>
                <button className="bg-slate-800 rounded-lg p-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Pay ₹50
                </button>
                <button className="bg-slate-800 rounded-lg p-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Pay ₹100
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
