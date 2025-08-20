import styles from "./Header.module.css";
import SearchFeature from "./SearchFeature.jsx";
import Login from "./Login.jsx";


/* Logo */
function Logo() {
  return (
    <div id="logo" className="fw-bolder text-warning">
      Milky Drip
    </div>
  );
}

/* Categories */
function Categories() {
  return (
    <div className={styles.categories}>
      <ul className="d-flex align-items-center gap-4 list-unstyled m-0">
        <li>Men's Fashion</li>
        <li>Women's Fashion</li>
      </ul>
    </div>
  );
}



/* Hamburger */
function Hamburger() {
  return <span className={`bi bi-list ${styles.hamburger}`}></span>;
}

function Header() {
  return (
    <header
      className={`${styles.Header} p-2 text-white`}
    >
      <Logo />
      <Categories />
      <SearchFeature />
      <Login />
      <Hamburger />
    </header>
  );
}

export default Header;


window.addEventListener("message", (event) => {
  if (event.data.type === "login") {
    console.log("Logged in:", event.data.name, event.data.pwd);
    document.getElementById("loginButton").textContent = `Hi ! ${event.data.name}`;
  } 
  else if (event.data.type === "signup") {
    console.log("Signed up:", event.data.name, event.data.pwd, event.data.cnfpwd);
    document.getElementById("loginButton").textContent = `Hi ! ${event.data.name}`;
  }
});
