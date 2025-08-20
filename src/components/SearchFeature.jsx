
import styles from './SearhFeature.module.css';

function SearchFeature() {
  return (
    <>
    <div className={`${styles.headerSearch}`}>
        <div className=" d-flex align-items-center p-2">
            <span  className={`bi bi-search pe-2 ${styles.searchIcon}` }></span>
            <input
                type="text"
                id="searchProduct"
                placeholder="Search by product"
                className="input-box border-0" onKeyUp={Search}
            />
        </div>
    </div>
    </>
  );
}




function Search(){
    const categories = ['shirt','t-shirt','tshirt','pant','top','jeans','dhooti','kurta','kurtas']
    let val = document.getElementById("searchProduct").value.trim().toLowerCase();

    let matchedItem = []
    categories.forEach(category => {
        if(category.startsWith(val)){
            matchedItem.push(category)
        }
    });

    console.log(matchedItem);

    const ul = document.createElement("ul");
    matchedItem.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

}
export default SearchFeature;