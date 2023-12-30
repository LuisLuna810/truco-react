import { useMediaQuery } from "@mui/material";

export const BurguerMenuIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-menu-2"
    width={size ? size : "2rem"}
    height={size ? size : "2rem"}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 6l16 0" />
    <path d="M4 12l16 0" />
    <path d="M4 18l16 0" />
  </svg>
);

export const CloseIcon = ({ size }) => {
  const isMobile = useMediaQuery("(max-width: 1280px)");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-x"
      width={size ? size : isMobile ? "1.6rem" : "2rem"}
      height={size ? size : isMobile ? "1.6rem" : "2rem"}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export const PlusIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-plus"
    width={size ? size : "3.5rem"}
    height={size ? size : "3.5rem"}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M5 12l14 0" />
  </svg>
);

export const MinusIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-minus"
    width={size ? size : "3.5rem"}
    height={size ? size : "3.5rem"}
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 12l14 0" />
  </svg>
);

export const RestartIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-rotate-2"
      width={size ? size : "2.2rem"}
      height={size ? size : "2.2rem"}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
      <path d="M18.37 7.16l0 .01" />
      <path d="M13 19.94l0 .01" />
      <path d="M16.84 18.37l0 .01" />
      <path d="M19.37 15.1l0 .01" />
      <path d="M19.94 11l0 .01" />
    </svg>
  );
};

export const NetworkIcon = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-network"
      width={size ? size : "2.2rem"}
      height={size ? size : "2.2rem"}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9a6 6 0 1 0 12 0a6 6 0 0 0 -12 0" />
      <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6" />
      <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6" />
      <path d="M6 9h12" />
      <path d="M3 20h7" />
      <path d="M14 20h7" />
      <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12 15v3" />
    </svg>
  );
};

