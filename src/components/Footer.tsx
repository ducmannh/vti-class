export default function Footer() {
  return (
    <>
      <div className="bg-black text-gray-300 pt-16 pl-6 pb-16 lg:pl-36">
        <p className="underline underline-offset-2 cursor-pointer mb-7">
          Questions? Contact us.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
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

      <div className="bg-black text-white pb-16 lg:pl-36 pl-6">
        <select
          className="bg-slate-950 text-white px-3 py-1.5 rounded-md w-40 mt-3"
          style={{ border: "1px solid white" }}
        >
          <option value="English">English</option>
          <option value="Tiếng Việt">Tiếng Việt</option>
        </select>
        <p className="mt-4">Netflix Vietnam</p>
      </div>
    </>
  );
}
