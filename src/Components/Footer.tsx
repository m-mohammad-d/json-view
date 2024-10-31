function Footer() {
  return (
    <footer className="bg-white py-4">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-800 text-center md:text-left">
          © {new Date().getFullYear()} m-mohammad-d . All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/m-mohammad-d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href="https://t.me/silver_shade1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-500"
          >
            telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
