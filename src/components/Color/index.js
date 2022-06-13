const Color = ({ isActive, onClick, name, color, index }) => {
  return (
    <button
      onClick={() => onClick(index)}
      className={`color ${isActive ? "active" : ""}`}
      style={{ background: color }}
    >
      {name}
    </button>
  );
};

export default Color;
