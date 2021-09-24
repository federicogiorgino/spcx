import React, { FC } from "react";
import { Image } from "react-native";

interface ILogoProps {
  size: number;
}

const Logo: FC<ILogoProps> = ({ size }) => (
  <Image
    source={require("../../../assets/launch.png")}
    style={{ height: size, width: size }}
  />
);

export default Logo;
