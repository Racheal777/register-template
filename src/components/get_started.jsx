import React from "react";
import pic from "../assets/pics.jpg";

export default function GetStarted() {
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 font-sans ">
        <div>
          <img src={pic} alt="" srcset="" className="rounded-r-lg h-full object-cover" />
        </div>

        <div className="p-8 my-4 mx-4">
          <div className="py-4 text-left">
            <h1 className="text-xl font-bold py-2">Let's get started</h1>
            <p className="text-slate-400 text-sm">
              {" "}
              Quidem facere corporis libero alias porro deserunt dolorem ipsam
              unde temporibus sunt recusandae itaque nihil non.
            </p>
          </div>

          <div className="relative p-3 my-4 shadow-lg flex text-left items-center rounded-md border w-full">
            <div className="absolute inset-0 bg-[url('assets/pict.jpg')] bg-cover bg-center rounded-md">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-md"></div>
            </div>

            <div className="bg-white rounded-md border p-2 flex-none w-10 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
            </div>

            <div className="relative  flex-1 px-3 text-slate-200">
              <h2 className="m-0 font-bold">Home</h2>
              <p className="text-sm m-0 text-slate-200">
                Your current or soon-to-be home
              </p>
            </div>
          </div>

          <div className="relative p-3 my-4 shadow-lg flex text-left items-center rounded-md border w-full">
            <div className="absolute inset-0 bg-[url('assets/pic.jpg')] bg-cover bg-center rounded-md">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-md"></div>
            </div>

            <div className="bg-white rounded-md border p-2 flex-none w-10 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative  flex-1 px-3 text-slate-200">
              <h2 className="m-0 font-bold">Auto</h2>
              <p className="text-sm m-0 text-slate-200">
                Your personal vehicle(s)
              </p>
            </div>
          </div>

          <div className="relative p-3 my-4 shadow-lg flex text-left items-center rounded-md border w-full">
            <div className="absolute inset-0 bg-[url('assets/picc.jpg')] bg-cover bg-center rounded-md ">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-md"></div>
            </div>

            <div className="bg-white rounded-md border p-2 flex-none w-10 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-blue-600"
              >
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
              </svg>
            </div>

            <div className="relative  flex-1 px-3 text-slate-200">
              <h2 className="m-0 font-bold">Recreational Vehicle</h2>
              <p className="text-sm m-0 text-slate-200">Your boat, RV, motorcycle, etc.</p>
            </div>
          </div>

          <div className="py-3">
            <button
              type="submit"
              className="rounded-md border border-blue-400 p-2 w-full bg-blue-600 text-white"
            >
              Agree and Continue
            </button>
          </div>

          <div className="py-3">
            <p className="text-sm m-0 text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugiat
              dicta velit, necessitatibus quibusdam labore incidunt distinctio !
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
