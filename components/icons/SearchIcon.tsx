import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props:any) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.042 13.042L9.917 9.917M.958 6.167a5.208 5.208 0 1110.417 0 5.208 5.208 0 01-10.417 0z"
        stroke="#94A3B8"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon
