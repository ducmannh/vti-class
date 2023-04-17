export default function Home() {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img src="src/assets/Netflix1.jpg" className="relative max-[500px]:h-96 max-[600px]:h-96"/>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexWrap: "wrap",
          }}
        >
          <img
            src="src/assets/Logo.png"
            className="absolute top-6 left-8 w-24 md:left-20 md:w-32 lg:left-40 lg:w-36 2xl:left-40 2xl:w-48 max-[500px]:left-3"
          />
          <div className="absolute top-5 right-2 md:right-8 lg:right-16 2xl:right-40 2xl:top-6 max-[500px]:left-56">
            <select className="bg-slate-950 text-white px-3 py-1.5 rounded-md w-40 max-[500px]:w-1/3">
              <option value=""></option>
              <option value="English">English</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
            </select>
            <button className="text-white bg-red-700 font-medium rounded-md text-sm px-5 py-2 ml-2 2xl:ml-6">
              Sign In
            </button>
          </div>
        </div>
      </div>

      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="absolute top-32 text-white md:top-56 lg:top-80 2xl:top-1/2 2xl:mt-8 max-[500px]:text-center max-[600px]:text-center"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-extrabold leading-loose lg:leading-10 2xl:mb-5 max-[500px]:text-2xl">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-md lg:text-xl 2xl:text-2xl leading-loose lg:leading-10 2xl:mb-5 max-[500px]:text-md">
            Watch any where. Cancel anytime.
          </p>
          <p className="text-md lg:text-xl 2xl:text-2xl leading-loose lg:leading-10 mb-5 max-[500px]:text-md max-[500px]:w-2/3 max-[500px]:leading-snug max-[500px]:mt-1">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div>
            <input
              type="text"
              className="rounded-md w-96 px-4 py-4 text-white bg-slate-900 text-sm lg:text-xl max-[500px]:w-5/6 max-[500px]:py-3"
              placeholder="Email address"
            />
            <button className="text-white bg-red-700 font-medium rounded-md px-5 py-4 ml-4 w-36 text-sm lg:text-xl lg:py-4 max-[500px]:py-3 max-[500px]:ml-0 max-[500px]:mt-1 max-[600px]:mt-1">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div style={{border: '4px solid gray'}}></div>
    </>
  );
}
