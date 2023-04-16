export default function Introduce() {
  return (
    <>
      <div className="bg-black flex flex-col items-center lg:flex lg:flex-row lg:justify-center pb-16">
        <div className="text-center pt-16 lg:text-left lg:w-1/2 lg:pt-0 lg:ml-10">
          <h1 className="text-2xl text-white font-extrabold leading-loose md:text-4xl lg:text-5xl 2xl:ml-36 md:mb-5">
            Enjoy on your TV.
          </h1>
          <p className="leading-loose text-md text-white ml-20 mr-20 md:text-lg lg:text-xl lg:w-72 2xl:w-1/2 2xl:ml-36">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div>
          <img src="src/assets/Netflix4.png" className="2xl:mr-48" />
        </div>
      </div>
      <div style={{ border: "4px solid gray" }}></div>

      <div className="bg-black flex flex-col items-center lg:flex lg:flex-row-reverse lg:justify-center pb-16">
        <div className="text-center pt-16 lg:w-1/2 lg:text-left">
          <h1 className="text-2xl text-white font-extrabold leading-loose md:text-4xl md:mb-5 lg:text-5xl 2xl:mr-5">
            Download your shows to watch offline.
          </h1>
          <p className="text-md text-white leading-loose md:text-lg lg:text-xl 2xl:mr-5 2xl:mt-5">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
        <div>
          <img src="src/assets/Netflix2.jpg" />
        </div>
      </div>
      <div style={{ border: "4px solid gray" }}></div>

      <div className="bg-black flex flex-col items-center lg:flex lg:flex-row lg:justify-center pb-16 lg:pt-16 2xl:pt-16">
        <div className="text-center pt-16 lg:text-left lg:w-1/2 lg:pt-0 lg:ml-10">
          <h1 className="text-2xl text-white font-extrabold leading-loose md:text-4xl lg:text-5xl 2xl:ml-36 md:mb-5">
            Watch everywhere.
          </h1>
          <p className="leading-loose text-md text-white ml-20 mr-20 md:text-lg lg:text-xl lg:w-72 2xl:w-1/2 2xl:ml-36">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div>
          <img src="src/assets/Netflix3.png" className="2xl:mr-48" />
        </div>
      </div>
      <div style={{ border: "4px solid gray" }}></div>

      <div className="bg-black flex flex-col items-center lg:flex lg:flex-row-reverse lg:justify-center pb-16 lg:pt-16 2xl:pt-16">
        <div className="text-center pt-16 lg:w-1/2 lg:text-left">
          <h1 className="text-2xl text-white font-extrabold leading-loose md:text-4xl md:mb-5 lg:text-5xl 2xl:mr-5">
            Create profiles for kids.
          </h1>
          <p className="text-md text-white leading-loose ml-20 mr-20 md:text-lg lg:text-xl 2xl:mr-24 2xl:mt-5 2xl:w-3/4">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div>
          <img src="src/assets/Netflix5.png" />
        </div>
      </div>
      <div style={{ border: "4px solid gray" }}></div>
    </>
  );
}
