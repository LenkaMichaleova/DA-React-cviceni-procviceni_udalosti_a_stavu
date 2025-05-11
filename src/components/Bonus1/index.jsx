import { useState } from "react";

// Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládejte do stavu, co uživatel napsal.
// Zadání 2: Mezi tagy `<b></b>` vložte napsaný text.
// Zadání 3. V dalším odstavci `<p>` zobrazte, kolik má text znaků.
// Zadání 4. Poslední odstavec zobrazte pouze v případě, že je text kratší než 8 znaků.

export const Bonus1 = () => {
  const [stav, setStav] = useState("")
  const length = stav.length

  return (
    <>
      <label>
        Napiš něco: <input onChange={(e) => setStav(e.target.value)}/>
      </label>
      <p>
        Do políčka výše uživatel napsal: <b>{stav}</b>
      </p>
      <p>Počet znaků: {length}</p>
      {length < 8 && <p>Jako heslo by text neobstál.</p>}
    </>
  );
};
