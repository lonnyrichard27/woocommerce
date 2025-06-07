import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconProps {
  color?: string;
  props?: any
}

function ProfileIcon({ color = '#000', props }: IconProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5a2.502 2.502 0 01-3.46 2.31A2.502 2.502 0 019.487 9.5a2.502 2.502 0 013.462-2.31 2.5 2.5 0 011.545 2.31z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ProfileIcon
