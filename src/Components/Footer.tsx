function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-300 text-center md:text-left">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
