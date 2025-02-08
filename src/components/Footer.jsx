const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-4 w-full mt-4 bottom-0">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Modern News Digest. All rights
          reserved.
        </p>
        <p>
          <a href="/" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/" className="text-blue-400 hover:underline ml-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
