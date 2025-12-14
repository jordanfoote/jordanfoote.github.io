import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
          <Link to="/">jf</Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
