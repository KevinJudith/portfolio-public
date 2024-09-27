import Link from 'next/link';

const MyNavbar = () => {
  return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link href={"/"} className="nav-link me-3">Home</Link>
            <Link href={"/projects"} className="nav-link me-3">Projects</Link>
        </nav>
  );
};

export default MyNavbar;
