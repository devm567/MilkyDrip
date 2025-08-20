import styles from "./BannerComponent.module.css"

function BannerComponent(){
    return <> 
        <main className="p-5">
            <div className={`${styles.mainContent} d-flex gap-5`}>
                <div className={`${styles.card} ` }>
                    <img src="./images/manfashion1-min.png" alt="Men Fashion" className="d-block"/>
                    <button className="btn btn-danger">Men Fashion</button>
                </div>
                <div className={`${styles.card}`}>
                <img src="./images/womanFashion1-min.png" alt="Women Fashion" className="d-block"/>
                <button className="btn btn-danger">Women Fashion</button>
                </div>
            </div>
        </main>
    </>
}

export default BannerComponent;