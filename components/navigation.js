import Link from "next/link";

const Navigation = () => {
  return (
//     <ul>
//       <li>
//         <Link href='/'>
//         <a>Index</a>
//       </Link>
//     </li>
//   <li>
//     <Link href='/about'>
//       <a>About</a>
//     </Link>
//   </li>
//   <li>
//     <Link href='/services'>
//       <a>Services</a>
//     </Link>
//   </li>
// </ul>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href='/'>
              <a className="nav-link">Index <span className="sr-only">(current)</span></a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/about'>
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href='/services'>
              <a className="nav-link">Services</a>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navigation
