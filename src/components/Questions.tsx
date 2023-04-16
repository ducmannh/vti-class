export default function Questions() {
  return (
    <>
      <div className="bg-black text-white pt-12">
        <h1 className="text-center text-3xl font-extrabold leading-loose mb-5 2xl:text-5xl 2xl:mb-7">
          Frequently Asked Questions
        </h1>
        <ul>
          <li className="bg-zinc-800 px-5 py-5 mb-2 text-xl ml-7 mr-7 hover:bg-gray-700 cursor-pointer lg:text-2xl lg:py-6 2xl:ml-48 2xl:mr-48">
            What is Netflix?{" "}
            <span className="text-4xl float-right leading-5 lg:text-5xl lg:leading-6">+</span>
          </li>
          <li className="bg-zinc-800 px-5 py-5 mb-2 text-xl ml-7 mr-7 hover:bg-gray-700 cursor-pointer lg:text-2xl lg:py-6 2xl:ml-48 2xl:mr-48">
            How much does Netflix cost?{" "}
            <span className="text-4xl float-right leading-5 lg:text-5xl lg:leading-6">+</span>
          </li>
          <li className="bg-zinc-800 px-5 py-5 mb-2 text-xl ml-7 mr-7 hover:bg-gray-700 cursor-pointer lg:text-2xl lg:py-6 2xl:ml-48 2xl:mr-48">
            Where can I watch?{" "}
            <span className="text-4xl float-right leading-5 lg:text-5xl lg:leading-6">+</span>
          </li>
          <li className="bg-zinc-800 px-5 py-5 mb-2 text-xl ml-7 mr-7 hover:bg-gray-700 cursor-pointer lg:text-2xl lg:py-6 2xl:ml-48 2xl:mr-48">
            How do I cancel?{" "}
            <span className="text-4xl float-right leading-5 lg:text-5xl lg:leading-6">+</span>
          </li>
          <li className="bg-zinc-800 px-5 py-5 mb-2 text-xl ml-7 mr-7 hover:bg-gray-700 cursor-pointer lg:text-2xl lg:py-6 2xl:ml-48 2xl:mr-48">
            What can I watch on Netflix{" "}
            <span className="text-4xl float-right leading-5 lg:text-5xl lg:leading-6">+</span>
          </li>
          <li className="bg-zinc-800 px-5 py-5 text-xl ml-7 mr-7 hover:bg-gray-700 cursor-pointer lg:text-2xl lg:py-6 2xl:ml-48 2xl:mr-48">
            Is Netflix good for kids{" "}
            <span className="text-4xl float-right leading-5 lg:text-5xl lg:leading-6">+</span>
          </li>
        </ul>

        <div className="flex flex-col items-center mt-6 pb-16 lg:mt-9">
          <p className="text-lg lg:text-xl 2xl:text-2xl leading-loose lg:leading-10 mb-5 ml-20 mr-20 text-center">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div>
            <input
              type="text"
              className="rounded-md w-96 px-4 py-4 text-white bg-slate-950 text-sm lg:text-xl"
              placeholder="Email address"
            />
            <button className="text-white bg-red-700 font-medium rounded-md px-5 py-4 ml-4 w-36 text-sm lg:text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div style={{ border: "4px solid gray" }}></div>
    </>
  );
}
