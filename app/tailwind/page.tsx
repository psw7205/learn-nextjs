import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind",
};

export default function TailwindPage() {
  return (
    <div>
      <div className="grid min-h-screen grid-cols-1 gap-6 bg-pink-50 p-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white px-6 py-12">
          <div className="text-3xl font-extrabold">Weather</div>

          <div className="mt-8 flex justify-between rounded-lg border-2 border-b-4 border-black p-4">
            <div className="font-bold">
              <div>Casius</div>
              <div className="text-xs">Mars, 12AM</div>
            </div>

            <div className="flex items-center justify-center">
              <svg
                data-slot="icon"
                width="48"
                height="48"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
              <div className="ml-2 text-3xl font-extrabold">85°</div>
            </div>
          </div>

          <div className="mt-4 flex justify-between rounded-lg border-2 border-b-4 border-black bg-orange-300 p-4">
            <div className="font-bold">
              <div>Casius</div>
              <div className="text-xs">Mars, 12AM</div>
            </div>

            <div className="flex items-center justify-center">
              <svg
                data-slot="icon"
                width="48"
                height="48"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
              <div className="ml-2 text-3xl font-extrabold">85°</div>
            </div>
          </div>
          <div className="mt-4 flex justify-between rounded-lg border-2 border-b-4 border-black bg-green-300 p-4">
            <div className="font-bold">
              <div>New York</div>
              <div className="text-xs">USA, 12AM</div>
            </div>

            <div className="flex items-center justify-center">
              <svg
                data-slot="icon"
                width="48"
                height="48"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
              <div className="ml-2 text-3xl font-extrabold">85°</div>
            </div>
          </div>
          <div className="mt-4 flex justify-between rounded-lg border-2 border-b-4 border-black bg-red-400 p-4 text-white">
            <div className="font-bold">
              <div>Zomato</div>
              <div className="text-xs">India, 12AM</div>
            </div>

            <div className="flex items-center justify-center">
              <svg
                data-slot="icon"
                width="48"
                height="48"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                ></path>
              </svg>
              <div className="ml-2 text-3xl font-extrabold">20°</div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="rounded-full border-2 border-b-4 border-black p-2">
              <svg
                width="24"
                height="24"
                className="stroke-2"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white px-6 py-12">
          <div className="flex">
            <div className="rounded-full border-2 border-b-4 border-black p-2">
              <svg
                width="24"
                height="24"
                className="stroke-2"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="text-center font-bold text-gray-600">SIMPLE TAG</div>
          <div className="text-center text-3xl font-extrabold">
            WORK with Best designers
          </div>
          <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-6">
            <div className="flex h-40 justify-center rounded-lg border-2 border-black bg-orange-300 align-middle">
              <svg
                className="stroke-white stroke-1"
                width="48"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="flex h-40 justify-center rounded-lg border-2 border-black bg-green-300 align-middle">
              <svg
                className="stroke-white stroke-1"
                width="48"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="flex h-40 justify-center rounded-lg border-2 border-black bg-pink-300 align-middle">
              <svg
                className="stroke-white stroke-1"
                width="48"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
            <div className="flex h-40 justify-center rounded-lg border-2 border-black bg-red-300 align-middle">
              <svg
                className="stroke-white stroke-1"
                width="48"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                ></path>
              </svg>
            </div>
          </div>
          <div className="mt-12 w-full rounded-lg bg-blue-600 py-4 text-center font-bold text-white">
            Let&apos; get it done
          </div>
        </div>
        <div className="bg-orange-400 px-6 py-12">
          <div className="relative flex items-center justify-between">
            <div className="rounded-full border-2 border-b-4 border-black bg-white p-2">
              <svg
                width="24"
                height="24"
                className="stroke-2"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                ></path>
              </svg>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-3xl font-extrabold">
              Friends
            </div>
          </div>

          <div className="mt-12 flex justify-between rounded-xl border-2 border-b-4 border-black bg-white p-4">
            <div className="text-gray-400">Search with lobe ...</div>
            <svg
              data-slot="icon"
              width="24"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              ></path>
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-black bg-white p-4">
            <div className="flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-red-300"></div>
              <div>
                <div className="text-lg font-bold">Bill Rizer</div>
                <div className="text-sm text-gray-400">planet designer</div>
              </div>
            </div>
            <div className="h-12 rounded-xl border-2 border-b-4 border-black bg-orange-400 p-2 font-bold">
              invite
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-black bg-white p-4">
            <div className="flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-green-300"></div>
              <div>
                <div className="text-lg font-bold">Genbei Yagy</div>
                <div className="text-sm text-gray-400">planet designer</div>
              </div>
            </div>
            <div className="h-12 rounded-xl border-2 border-b-4 border-black bg-orange-400 p-2 font-bold">
              invite
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-black bg-white p-4">
            <div className="flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-orange-300"></div>
              <div>
                <div className="text-lg font-bold">Lancy Neo</div>
                <div className="text-sm text-gray-400">Rogue corp</div>
              </div>
            </div>
            <div className="h-12 rounded-xl border-2 border-black bg-black p-2 font-bold text-white">
              invited
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl border-2 border-black bg-white p-4">
            <div className="flex items-center">
              <div className="mr-4 h-16 w-16 rounded-full bg-red-300"></div>
              <div>
                <div className="text-lg font-bold">Bill Rizer</div>
                <div className="text-sm text-gray-400">planet designer</div>
              </div>
            </div>
            <div className="h-12 rounded-xl border-2 border-b-4 border-black bg-orange-400 p-2 font-bold">
              invite
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
