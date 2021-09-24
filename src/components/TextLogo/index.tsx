import React, { memo } from "react";
import { Text } from "react-native-paper";
import { styles } from "./styles";

const TextLogo = () => <Text style={styles.logoText}>SPCX</Text>;

export default memo(TextLogo);
