import logo from "../assets/investment-calculator-logo.png"

export default function Header({ children }) {
  return (
    <header id="header">
      <img src={logo} alt="logo showing a money bag" />
      <h1>{children ? children : "React Investment Calculator"}</h1>
    </header>
  );
}
