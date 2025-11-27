export default function Header({ children }) {
  return (
    <div id="header">
      <img src="investment-calculator-logo.png" alt="" />
      <h1>{children ? children : "React Investment Calculator"}</h1>
    </div>
  );
}
