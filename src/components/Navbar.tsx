"use client";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "#",
      dropdown: [
        { label: "Baja Racing", href: "/about" },
        { label: "History", href: "/about/history" },
      ],
    },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Team", href: "/team" },
    { label: "Join the Team", href: "/join" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <div className="group relative">
                  <button className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
                    {item.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
