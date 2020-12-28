export const message = "MLA";
function Button(props) {
  return (
    <button style={{ color: "#FFF", backgroundColor: "red" }}>
      {props.text}
    </button>
  );
}
export default Button;
