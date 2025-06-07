import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconProps {
  color?: string;
  props?: any
}

function HomeIcon({ color = '#000', props }: IconProps) {
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
        d="M7.088 4.762l-1 .781c-1.516 1.184-2.275 1.776-2.681 2.61C3 8.988 3 9.952 3 11.88v2.092c0 3.784 0 5.676 1.172 6.852C5.344 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.176C20.999 19.648 21 17.756 21 13.971v-2.09c0-1.929 0-2.893-.407-3.728-.407-.834-1.165-1.426-2.681-2.61l-1-.78C14.552 2.92 13.372 2 12 2c-1.372 0-2.552.92-4.912 2.762z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HomeIcon
