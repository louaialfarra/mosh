import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="bg-amber-700 flex gap-5 p-4 ">
        <div className="home">
          <Link href="/">Home</Link>
        </div>
        <div className="About">About</div>
        <div className="contact">Contact Us</div>
      </div>
    </>
  );
};
export default NavBar;
