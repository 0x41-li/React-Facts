import reactjsIcon from "../assets/icons/reactjs.png";

export default function NavBar(props) {
  return (
    <header className={props.lightMode ? "light-mode" : ""}>
      <nav>
        <div className="logo">
          <img src={reactjsIcon} alt="" />
          <p>ReactFacts</p>
        </div>
        <div className="nav-right-part">
          <div className="theme-mode-toggler-wrapper">
            <p>Light</p>
            <div className="theme-mode-toggler" onClick={props.toggleLightMode}>
              <div className="theme-mode-toggler-circle"></div>
            </div>
            <p>Dark</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
