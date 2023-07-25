import Applinces from "./applinces";

const AppliancesContainer = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((menuItems) => {
        return <Applinces key={menuItems.id} {...menuItems} />;
      })}
    </div>
  );
};

export default AppliancesContainer;
