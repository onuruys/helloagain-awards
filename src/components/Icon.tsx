import IonIcon from "@react-native-vector-icons/ionicons";
import type { IconProps } from "@react-native-vector-icons/common";
function Icon(props: IconProps) {
  const { name, size, color, style } = props;
  return <IonIcon name={name} size={size} color={color} style={style} />;
}
export default Icon;
