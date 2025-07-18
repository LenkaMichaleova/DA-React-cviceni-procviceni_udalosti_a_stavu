import { useState } from 'react';
import './ukazatel-uspechu.css';

// Zadání 1: Použijte prop `barva` ve style atributu.
// Zadání 2: Přidejte komponentě číselný stav od nuly do sta, který bude reprezentovat postup.
// Zadání 3: Po kliknutí na tlačítko zvětšete stav o deset. Nejvýše ale do sta.
// Zadání 4. Nastavte prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.

const UkazatelPokroku = ({ barva }) => {
  const [stav, setStav] = useState(0)

  return (
    <div className="ukazatel-uspechu">
      <div className="ukazatel-uspechu__ramecek">
        <div
          className="ukazatel-uspechu__postup"
          style={{
            width: `${stav}%`,
            backgroundColor: barva,
          }}
        ></div>
      </div>
      <button onClick={() => stav < 100 && setStav(stav + 10)}>postoupit o 10 %</button>
    </div>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <UkazatelPokroku barva="blue" />
      <UkazatelPokroku barva="green" />
      <UkazatelPokroku barva="purple" />
    </>
  );
};
