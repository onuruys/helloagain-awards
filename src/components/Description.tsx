import React, { memo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useWindowDimensions, Button } from "react-native";
import RenderHTML from "react-native-render-html";
function Description({ description }: { description: string }) {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();
  const seeMoreCount = 120;
  const [seeMore, setSeeMore] = useState<{ available: boolean; active: boolean }>({
    available: Boolean(description) && description!.length > seeMoreCount,
    active: false,
  });
  return (
    <>
      <RenderHTML
        baseStyle={{ color: colors.text }}
        contentWidth={width}
        source={{
          html: seeMore.active ? description : description.slice(0, seeMoreCount),
        }}
      />
      {seeMore.available && (
        <Button
          title={seeMore.active ? "See less" : "See more"}
          onPress={() => setSeeMore({ ...seeMore, active: !seeMore.active })}
        />
      )}
    </>
  );
}
export default memo(Description);
