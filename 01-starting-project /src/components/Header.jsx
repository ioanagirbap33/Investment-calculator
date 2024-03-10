import image from "../assets/investment-calculator-logo.png";

export const Header = () => {
  return (
    <header id="header">
      <img src={image} alt="logo"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
};
