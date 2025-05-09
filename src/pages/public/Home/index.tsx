export default function Home() {
  return (
    <div className="bg-white">
      <main className="min-h-screen  flex-grow flex flex-col">
        {/* Hero Section */}
        <div className="flex-grow bg-gradient-to-b from-[#15366B] to-[#2969D1] text-white flex flex-col items-center justify-center px-4 py-12">
          {/* Welcome message */}
          <div className="bg-[#15366B] rounded-full px-6 py-2 mb-10">
            <p className="text-white flex items-center gap-2">
              <span className="inline-block">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M12 12L12 22" stroke="white" strokeWidth="2" />
                  <path d="M20 7L12 12" stroke="white" strokeWidth="2" />
                  <path d="M4 7L12 12" stroke="white" strokeWidth="2" />
                </svg>
              </span>
              Welcome to the Ezymart !
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            <span className="text-white">What </span>
            <span className="text-gray-400">we make </span>
            <span className="text-white">For You</span>
          </h1>

          {/* Description */}
          <p className="text-center max-w-3xl mb-10">
            EzyMart make you run your business smoothly than ever before through
            EzyMart pos without and extra works.
          </p>

          {/* CTA Button */}
          <button className="border border-white hover:bg-white hover:text-blue-900 text-white py-2 px-8 rounded-full transition-colors">
            Get Started
          </button>

          {/* Dashboard Image */}
          <div className="mt-12 w-full max-w-4xl">
            <img
              src="/dashboard-image.png"
              alt="EzyMart Dashboard"
              className="w-full rounded-lg shadow-xl"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </main>

      <section className="bg-gray-100 py-12 !min-h-screen"></section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EzyMart. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ by{" "}
            <a
              href=""
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              EzyMart Team
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
