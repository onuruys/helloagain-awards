// import IonIcon from "@react-native-vector-icons/ionicons";
// import type { IconProps } from "@react-native-vector-icons/common";
// function Icon(props: IconProps) {
// const { name, size, color, style } = props;
// return <IonIcon name={name} size={size} color={color} style={style} />;
// }

import { Text } from "react-native";

function Icon(props: any) {
  return (
    <>
      <Text>{props.name}</Text>
    </>
  );
}

export default Icon;
