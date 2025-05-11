import { use, useState } from "react";

// Zadání 1: Vytvořte stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypište místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změňte `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha3 = () => {
  const [stav, setStav] = useState(0)
  const list = ["možná", "ano", "ne", "padají trakaře"]

  const [stav2, setStav2] = useState("možná")
  const handleClick = () => {
    if (stav2 === "možná") {
      setStav2("ano")
    } else if (stav2 === "ano") {
      setStav2("ne")
    } else {
      setStav2("možná")
    }
  }

  return (
    <>
      <h3>Prší v Brně: {list[stav]}</h3>
      <button onClick={() => stav < (list.length - 1) ? setStav(stav + 1) : setStav(0)}>změnit</button>

      <h3>Prší v Brně: {stav2}</h3>
      <button onClick={handleClick}>změnit</button>
    </>
  );
};
