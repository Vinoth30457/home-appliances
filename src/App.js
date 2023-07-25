import { useState } from "react";
import { Categories, AppliancesContainer } from "./components";
import { menu } from "./constants";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  // const categories = ["All", "Fridge", "TV", "Wash machine"];
  const newSet = new Set(menu.map((items) => items.category));
  const categories = ["All", ...newSet];

  const filterMenuItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter(
      (menuItem) => menuItem.category === category
    );
    setMenuItems(newMenuItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Home Appliances</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <AppliancesContainer menuItems={menuItems} />
      </section>
    </main>
  );
};

export default App;
