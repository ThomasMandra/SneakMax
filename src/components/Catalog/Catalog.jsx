import boots from "../../data/boots";
import CatalogFilter from "./CatalogFilter";
import CatalogList from "./CatalogList";
import style from "./Catalog.module.css";
import { useState } from "react";

function Catalog() {
  const [items, setItems] = useState(boots);

  return (
    <div>
      <h2 className={style.catalogTitle}>Каталог</h2>
      <div
        className={style.catalog}
        style={{ display: "flex", columnGap: "20px" }}
      >
        <CatalogFilter setItems={setItems} />
        <CatalogList items={items} />
      </div>
    </div>
  );
}

export default Catalog;
