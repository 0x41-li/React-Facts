import reactjsIcon from "../assets/icons/reactjs.png";

export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={reactjsIcon} alt="" />
          <p>ReactFacts</p>
        </div>
        <div className="nav-right-part">
          <p>React Course - Project 1</p>
        </div>
      </nav>
    </header>
  );
}
