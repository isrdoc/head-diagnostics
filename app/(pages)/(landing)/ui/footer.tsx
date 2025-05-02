"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-black pt-16 pb-8">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24">
          {/* Left: Logo + Location */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-40 lg:gap-12">
            {/* Logo and Social */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/logo-light.svg"
                  alt="Head Diagnostics Logo"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <div className="font-bold">Fb. / Ig. / Tw. / Be.</div>
            </div>
            {/* Location */}
            <div>
              <div className="font-bold mb-4">Location</div>
              <div className="font-bold">Head Diagnostics LTD.</div>
              <div>
                Graaf Florisstraat 22A,
                <br />
                3021 CH Rotterdam
                <br />
                Netherlands
              </div>
            </div>
          </div>
          {/* Right: Resources + Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Resources */}
            <div>
              <div className="font-bold mb-4">Resources</div>
              <div className="mb-2">
                Interested in working with us?
                <br />
                <span className="font-bold">contact@headdiagnostics.com</span>
              </div>
              <div className="mt-8 mb-4 font-bold">Career</div>
              <div>
                Looking for a job opportunity?
                <br />
                <span className="font-bold">See open positions</span>
              </div>
            </div>
            {/* Newsletter */}
            <div>
              <div className="font-bold mb-4">Sign up for the newsletter</div>
              <form className="flex items-center bg-gray-200 rounded-lg overflow-hidden mb-2">
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="bg-transparent px-4 py-3 flex-1 outline-none text-black border-none"
                />
                <button type="submit" className="font-bold px-4 py-3">
                  Sign Up
                </button>
              </form>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  className="w-5 h-5 rounded border-gray-300"
                />
                <label htmlFor="newsletter-consent" className="text-sm">
                  I&apos;m okay with getting emails and having that activity
                  tracked to improve my experience.
                </label>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-8 border-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-black/80 gap-4">
          <div>© 2025- Head Diagnostics. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Sitemap
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Security
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy & Cookie Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
