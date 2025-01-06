const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-4">
      <div className="text-center">
        <p>
          &copy; {new Date().getFullYear()} Modern News Digest. All rights
          reserved.
        </p>
        <p>
          <a href="/privacy" className="text-blue-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="text-blue-400 hover:underline ml-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
