import styles from "./Header.module.css";

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

/* Search */
function Search() {
  return (
    <div className={`${styles.headerSearch}`}>
        <div className=" d-flex align-items-center p-2">
            <span className={`bi bi-search pe-2 ${styles.searchIcon}`}></span>
            <input
                type="text"
                id="search"
                placeholder="Search by product"
                className="input-box border-0"
            />
        </div>

    </div>
  );
}

/* Login Section */
function Login() {
  return (
    <div className={styles.LoginSection}>
        <div className={`d-flex gap-4 align-items-center ps-3 ${styles.rightSection}`}>
            <span className="bi bi-heart"></span>
            <span className="bi bi-bag"></span>
            <button className="btn btn-warning">Login/SignUp</button>
        </div>
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
      <Search />
      <Login />
      <Hamburger />
    </header>
  );
}

export default Header;
