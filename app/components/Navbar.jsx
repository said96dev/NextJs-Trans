import Link from 'next/link'

const links = [
  {
    href: '/home',
    label: 'home',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/contact',
    label: 'contact',
  },
]

const Navbar = () => {
  return (
    <nav className="bg-base-300">
      <div className="navbar   max-w-6xl mx-auto flex-col sm:flex-row">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link) => (
                <li key={link.href}>
                  <Link className="capitalize" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">XYZ</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="capitalize" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
