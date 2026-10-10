import { useState } from "react";
import mobileData from "../data/mobile";
import Mobile from "./Mobile";


function Mobiles() {
  const [mobiles, setMobiles] = useState(mobileData);

  const handleDiscount = (mobile) => {
    const updatedMobiles = mobiles.map((item) => {
      if (item.name === mobile.name) {
        return {
          ...item,
          price: item.price - 5000
        };
      }

      return item;
    });

    setMobiles(updatedMobiles);
  };

  return (
    <div className="grid grid-cols-3 gap-5 p-5">
      {mobiles.map((mobile) => (
        <Mobile
          key={mobile.name}
          mobile={mobile}
          onDiscount={handleDiscount}
        />
      ))}
    </div>
  );
}

export default Mobiles;