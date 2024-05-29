import { useState } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Buttons";
import Rawr from "./components/Rawr";
import Footer from "./components/Footer";

const ApaItuReactJSBuatPemula = ({ marginTop }) => {
  const [num, setNum] = useState(0);
  const traceButton = () => {
    setNum(num + 1);
  };

  const textName = "Alandrian Surya Tantra";
  const textNav = "Alandrian";

  const clicked = () => {
    return alert("button dipenct");
  };

  const marquee = () => {
    return (
      <div>
        <p>Hello World</p>
        <p>Miaw</p>
        <marquee>asadee</marquee>
      </div>
    );
  };
  return (
    <>
      <Navbar number={num} />
      <Rawr test={textNav} />
      <h1 style={{ marginTop: marginTop }}>INI HOMEPAGE</h1>
      <button onClick={() => traceButton()}>Ubah Navigasi {num}</button>
      <Button clicked={clicked} />
      <Footer paragraf={marquee} />
    </>
  );
};

export default ApaItuReactJSBuatPemula;
