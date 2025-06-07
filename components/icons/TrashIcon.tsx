import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TrashIcon(props:any) {
  return (
    <Svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.5 4.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 01-1.2 1.128C13.843 21 12.56 21 9.994 21c-2.57 0-3.855 0-4.814-.585a4 4 0 01-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L2.5 4.5M1 4.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 00-.275-.172C11.594 1 11.074 1 10.035 1c-1.066 0-1.599 0-2.04.234a2 2 0 00-.278.18c-.395.303-.616.788-1.058 1.757L6.053 4.5m1.447 11v-6m5 6v-6"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default TrashIcon
