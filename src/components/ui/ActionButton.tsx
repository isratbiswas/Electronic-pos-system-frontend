interface ActionButtonProps {
  label: "View" | "Edit" | "Delete";
  color: "blue" | "green" | "red";
  onClick: () => void;
  loading?: boolean;
  full?: boolean;
}

const ActionButton = ({
  label,
  color,
  onClick,
  loading,
  full,
}: ActionButtonProps) => {
  const styles = {
    blue: "bg-indigo-500 hover:bg-indigo-600",
    green: "bg-purple-500 hover:bg-purple-600",
    red: "bg-red-500 hover:bg-red-600",
  };
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`${styles[color]} ${
        full ? "flex-1" : ""
      } text-white px-4 py-2 rounded-md text-xs font-medium transition disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {loading ? "" : label}
    </button>
  );
};

export default ActionButton;
