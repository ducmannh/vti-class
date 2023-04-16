export default function HomePage() {
  return (
    <>
      <div className="bg-black text-white pt-7 pl-6 pb-16">
        <p className="underline underline-offset-2 cursor-pointer mb-7">
          Questions? Contact us.
        </p>
        <div className="flex justify-around flex-wrap">
          <div>
            <p className="underline underline-offset-2 cursor-pointer mb-3">
              FAQ
            </p>
            <p className="underline underline-offset-2 cursor-pointer mb-3">
              Account
            </p>
            <p className="underline underline-offset-2 cursor-pointer mb-3">
              Investor Relations
            </p>
            <p className="underline underline-offset-2 cursor-pointer mb-3">
              Ways to Watch
            </p>
            <p className="underline underline-offset-2 cursor-pointer mb-3">
              Privacy
            </p>
          </div>
          <div className="flex">
            <div className="mr-24">
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Corporate Information
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Speed Test
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Only on Netflix
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Help Center
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Media Center
              </p>
            </div>
            <div>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Jobs
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Term of Use
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Cookie Preferences
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Contact Us
              </p>
              <p className="underline underline-offset-2 cursor-pointer mb-3">
                Legal Notices
              </p>
            </div>
          </div>
        </div>
        <div>
          <select
            className="bg-slate-950 text-white px-3 py-1.5 rounded-md w-40 mt-6"
            style={{ border: "1px solid white" }}
          >
            <option value="English">English</option>
            <option value="Tiếng Việt">Tiếng Việt</option>
          </select>
          <p className="mt-4">Netflix Vietnam</p>
        </div>
      </div>
    </>
  );
}
