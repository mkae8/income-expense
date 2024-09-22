import Link from "next/link";

export const HomePage = () => {
  return (
    <div>
      <div class="bg-gradient-to-b from-[#101212] relative to-[#08201D]">
        <header class="absolute inset-x-0 top-0 z-10 w-full">
          <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
              <div class="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                <Link href={"/login"} className="text-white">
                  Log In
                </Link>
              </div>

              <button
                type="button"
                class="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  class="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

                <svg
                  class="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section class="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
          <div class="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            <img
              class="hidden w-full lg:block"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png"
              alt=""
            />
            <img
              class="block w-full lg:hidden"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png"
              alt=""
            />
          </div>

          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div class="max-w-xl mx-auto text-center">
              <h1 class="text-4xl font-bold sm:text-6xl">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                  Geld
                  <br />
                  Manage Your Expenses Easily.
                </span>
              </h1>
              <p class="mt-5 text-base text-white sm:text-xl">
                Control your budget and finance easily
              </p>

              <a
                href="/signup"
                title=""
                class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                Apply for free
                <svg
                  class="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
