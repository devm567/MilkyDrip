
/* Login Section */

import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.LoginSection}>
        <div className={`d-flex gap-4 align-items-center ps-3 ${styles.rightSection}`}>
            <span className="bi bi-heart"></span>
            <span className="bi bi-bag"></span>
            <button className="btn btn-warning" id="loginButton" onClick={openLoginWindow}>Login/SignUp</button>
        </div>
    </div>
  );
}

function openLoginWindow(){
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const width = Math.floor(screenWidth * 0.75);
  const height = Math.floor(screenHeight * 0.75);
  const left = Math.floor((screenWidth - width) / 2);
  const top = Math.floor((screenHeight - height) / 2);

  window.open(
    "./loginPage.html",
    "LoginWindow",
    `width=${width},height=${height},left=${left},top=${top}`
  );
  
}

export default Login;