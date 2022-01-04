import Image from "next/image";

export default function GetCyborgApe() {
  return (
    <>
      <main
        className="max-w-screen-2xl lg:px-24 md:px-16 px-8 mx-auto"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="mb-0 lg:mb-5 text-4xl font-bold leading-tight lg:leading-normal text-secondary lg:text-5xl text-center lg:text-left">
              Get Your Cyborg Ape
            </h2>
          </div>
          <div className="flex justify-center col-span-12 lg:col-span-6 lg:justify-end lg:mr-4 mt-4 lg:mt-0">
            <div className="py-4">
              <a
                href="https://opensea.io/collection/cyborgape"
                target="_blank"
                rel="noreferrer"
                className="px-12 py-4 font-semibold text-white transition duration-500 rounded-xl border-0 bg-secondary hover:bg-gray-700 shadow-xl shadow-secondary/30"
              >
                Get now
              </a>
            </div>
          </div>
        </div>
        <div className="grid w-full overflow-hidden overflow-x-scroll mt-8 lg:mt-0">
          <div>
            <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row mt-0 lg:mt-14">
              <div className="md:px-4">
                <Image
                  src="/img/art-6.svg"
                  width={1500}
                  height={1500}
                  alt=""
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="md:px-4">
                <Image
                  src="/img/art-2.svg"
                  alt=""
                  width={1500}
                  height={1500}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
              <div className="md:px-4">
                <Image
                  src="/img/art-4.svg"
                  alt=""
                  width={1500}
                  height={1500}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
