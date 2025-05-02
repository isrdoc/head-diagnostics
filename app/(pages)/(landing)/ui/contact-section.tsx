"use client";

export function ContactSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <ContactSectionInfo />
        <hr className="mb-12 border-gray-400" />
        <ContactSectionForm />
      </div>
    </section>
  );
}

function ContactSectionInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div>
        <h3 className="text-3xl font-bold mb-4">Get in touch</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-full md:max-w-md">
          <div>
            <div className="mb-6">
              <div className="mb-1">Work Inquiries</div>
              <div className="mb-4 font-bold">+1.809.120.6705</div>
            </div>
            <div>
              <div className="mb-1">Assistance hours:</div>
              <div>Monday - Friday</div>
              <div>6 am to 8 pm EST</div>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <div className="mb-1">Careers & Press</div>
              <div className="mb-4 font-bold">+1.809.120.4590</div>
            </div>
            <div>
              <div className="mb-1">Assistance hours:</div>
              <div>Tuesday - Saturday</div>
              <div>6 am to 8 pm EST</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Post address</h3>
            <div>
              Nova Innovation Centre
              <br />
              Nova Complex, Stillorgan Rd,
              <br />
              Belfield, Dublin 4, Ireland
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Social media</h3>
            <div className="flex flex-col gap-1 font-bold">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSectionForm() {
  return (
    <form className="space-y-8 w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-bold">
            Full Name (required)
          </label>
          <input
            type="text"
            required
            className="w-full rounded-lg bg-gray-200/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#6C7BC4] border-none"
            placeholder="First and last name"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-bold">
            Company (optional)
          </label>
          <input
            type="text"
            className="w-full rounded-lg bg-gray-200/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#6C7BC4] border-none"
            placeholder="Company / institution"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 text-sm font-bold">
            Email (required)
          </label>
          <input
            type="email"
            required
            className="w-full rounded-lg bg-gray-200/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#6C7BC4] border-none"
            placeholder="Business email"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 mb-2 text-sm font-bold">
          Message (required)
        </label>
        <textarea
          required
          className="w-full rounded-lg bg-gray-200/60 px-4 py-3 outline-none min-h-[120px] focus:ring-2 focus:ring-[#6C7BC4] border-none"
          placeholder="Write your message here"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="consent"
          className="w-5 h-5 rounded border-gray-300"
        />
        <label htmlFor="consent" className="text-gray-700 text-sm font-bold">
          I'm okay with getting emails and having that activity tracked to
          improve my experience.
        </label>
      </div>
      <button
        type="submit"
        className="bg-[#6C7BC4] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#5a68a0] transition-colors"
      >
        Submit
      </button>
    </form>
  );
}
