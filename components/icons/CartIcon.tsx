import * as React from "react"
import Svg, { Path } from "react-native-svg"

interface IconProps {
  color?: string;
  props?: any
}

function CartIcon({ color = '#000', props }: IconProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.625 15h7.263c4.488 0 5.17-2.82 5.998-6.93.239-1.187.358-1.78.071-2.175-.287-.395-.837-.395-1.938-.395H4.625"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.625 15L4.004 2.515A2 2 0 002.064 1h-.939m6.38 14h-.411c-1.364 0-2.469 1.151-2.469 2.571a.42.42 0 00.411.429h11.089M9.125 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.125 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CartIcon
