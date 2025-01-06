const Navbar = ({ setCategory }) => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="flex items-center justify-between">
        <a className="text-lg font-bold" href='/'>
          <span className="bg-slate-200 text-black p-2 rounded-lg">
            Modern News Digest
          </span>
        </a>
        <button
          className="lg:hidden text-white"
          aria-label="Toggle navigation"
          onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="lg:flex hidden space-x-6">
          <ul className="flex space-x-6">
            <li className="nav-item">
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory("science")}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
