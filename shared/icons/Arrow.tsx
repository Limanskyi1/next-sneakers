import { SVGProps } from "react";

interface ArrowProps extends SVGProps<SVGSVGElement> {
  fill:string
}

export const Arrow = ({fill}:ArrowProps) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7144 7L1.00007 7"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13L1 7L7 1"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
