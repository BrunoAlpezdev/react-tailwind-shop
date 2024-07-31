import * as React from "react"
import { JSX } from "react/jsx-runtime"

type IconProps = {
    color?: string
    width?: number
    height?: number
}

export const CreateIcon = (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 24}
      height={props.height || 24}
      fill="none"
      stroke="#fff"
      strokeWidth={0}
      viewBox="-2.16 -2.16 28.32 28.32"
      {...props}
    >
      <rect
        width={28.32}
        height={28.32}
        x={-2.16}
        y={-2.16}
        fill="#7fc380"
        stroke="none"
        rx={14.16}
      />
      <path
        fill="#fff"
        stroke="none"
        d="M13 3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2h-8V3Z"
      />
    </svg>
)




export const ReadIcon = (props: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 24}
        height={props.height || 24}
        fill="none"
        stroke="#fff"
        strokeWidth={0}
        viewBox="0 0 24 24"
        {...props}
    >
        <rect width={24} height={24} fill="#7ed0ec" stroke="none" rx={12} />
        <path
        fill="#fff"
        fillRule="evenodd"
        stroke="none"
        d="M12 5.25c-2.774 0-5.203 1.661-6.872 3.198a20.393 20.393 0 0 0-2.55 2.852 12.083 12.083 0 0 0-.185.259l-.01.016-.004.004-.274.434.273.406.001.002.003.004.011.016a6.945 6.945 0 0 0 .184.26 20.393 20.393 0 0 0 2.55 2.851c1.67 1.537 4.099 3.198 6.873 3.198s5.203-1.661 6.872-3.198a20.388 20.388 0 0 0 2.55-2.852 12.21 12.21 0 0 0 .185-.259l.01-.016.004-.004.001-.002.282-.419-.282-.42h-.001l-.003-.005-.01-.016a6.596 6.596 0 0 0-.185-.26 20.388 20.388 0 0 0-2.55-2.851C17.202 6.911 14.773 5.25 12 5.25Zm-7.71 7.216A17.629 17.629 0 0 1 3.926 12a18.901 18.901 0 0 1 2.218-2.448C7.733 8.089 9.804 6.75 12 6.75c2.196 0 4.268 1.339 5.856 2.802A18.9 18.9 0 0 1 20.074 12a18.898 18.898 0 0 1-2.219 2.448C16.269 15.911 14.197 17.25 12 17.25c-2.196 0-4.267-1.339-5.856-2.802a18.9 18.9 0 0 1-1.854-1.982ZM14.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        clipRule="evenodd"
        />
    </svg>
)

export const UpdateIcon = (props: IconProps ) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 24}
        height={props.height || 24}
        fill={props.color || "#fff"}
        stroke="#fff"
        strokeWidth={2.048}
        transform="rotate(-135)"
        viewBox="-76.8 -76.8 665.6 665.6"
        {...props}
    >
        <rect
        width={665.6}
        height={665.6}
        x={-76.8}
        y={-76.8}
        fill="#a1a1a1"
        stroke="none"
        strokeWidth={0}
        rx={332.8}
        transform="matrix(.93 0 0 .93 17.92 17.92)"
        />
        <path d="M64 256H34a222 222 0 0 1 396-137.85V85h30v105H355v-30h67.27A192.21 192.21 0 0 0 256 64C150.13 64 64 150.13 64 256Zm384 0c0 105.87-86.13 192-192 192a192.21 192.21 0 0 1-166.27-96H157v-30H52v105h30v-33.15A222 222 0 0 0 478 256Z" />
    </svg>
)

export const DeleteIcon = (props: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        widths={props.width || 24}
        height={props.height || 24}
        fill="#fff"
        stroke="#fff"
        className="icon"
        viewBox="-102.4 -102.4 1228.8 1228.8"
        {...props}
    >
        <rect
        width={1228.8}
        height={1228.8}
        x={-102.4}
        y={-102.4}
        fill="#e84a4a"
        stroke="none"
        strokeWidth={0}
        rx={614.4}
        />
        <g>
        <path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6C302.4 132 404 89.6 512 89.6c108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4zm0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" />
        <path d="M707.872 329.392 348.096 689.16l-31.68-31.68 359.776-359.768z" />
        <path d="m328 340.8 32-31.2 348 348-32 32z" />
        </g>
    </svg>
)
