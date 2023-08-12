import React from "react";
import Feature from "../Feature/Feature";
import {
  faBolt,
  faShop,
  faSolarPanel,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="flex justify-between">
      <Feature
        title="Feature 1"
        description="Description for Feature 1"
        icon={faSolarPanel}
      />
      <Feature
        title="Feature 2"
        description="Description for Feature 2"
        icon={faShop}
      />
      <Feature
        title="Feature 3"
        description="Description for Feature 3"
        icon={faBolt}
      />
    </div>
  );
};

export default Features;
