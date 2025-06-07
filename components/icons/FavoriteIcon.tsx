import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconProps {
  color?: string;
  props?: any
}

function FavoriteIcon({ color = '#000', props }: IconProps) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.838 3.994c-2.682-1.645-5.023-.982-6.429.074-.576.433-.864.65-1.034.65-.17 0-.458-.217-1.034-.65-1.406-1.056-3.747-1.719-6.429-.074-3.519 2.159-4.315 9.28 3.803 15.29C10.261 20.427 11.034 21 12.375 21c1.341 0 2.114-.572 3.66-1.717 8.118-6.008 7.322-13.13 3.803-15.289z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FavoriteIcon
