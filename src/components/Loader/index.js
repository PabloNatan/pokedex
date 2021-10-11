import React from "react";

import pokeball from "../../assets/pokeball.svg";
import { PokeballStyle } from "./styles";

const Loader = ({ size }) => (
  <PokeballStyle src={pokeball} size={size} />
);

export default Loader;
