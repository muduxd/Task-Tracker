import "../styles/Header.css";

export const Header = ({ addButton, setAddButton }) => {
  const handleClick = () => {
    setAddButton(!addButton);
  };

  return (
    <div className="header">
      <div>Task Tracker</div>
      <button className="close-button" onClick={handleClick} style={{ backgroundColor: addButton ? "red" : "green" }}>
        {addButton ? "Close" : "Add"}
      </button>
    </div>
  );
};
