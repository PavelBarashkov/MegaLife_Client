import "../main.css";
export const DeleteIcon = ({ onClick }: any) => {
  return (
    <svg
      onClick={onClick}
      className="delete-icon"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#8860FF"
    >
      <path
        d="M5 5L8 8M8 8L5 11M8 8L11 11M8 8L11 5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
