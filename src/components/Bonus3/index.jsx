import { useCasVSekundach } from './hodiny'

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobrazte aktuální čas ve formátu 7:49:05.

// Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je 0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.

export const Bonus3 = () => {
  const casVSekundach = useCasVSekundach();
  const hodina = Math.floor(casVSekundach / 60 / 60 % 60).toString()
  const minuta = Math.floor(casVSekundach / 60 % 60).toString().padStart(2, "0")
  const vterina = Math.floor(casVSekundach % 60).toString().padStart(2, "0")

  return (
    <>
      Čas právě teď v sekundách: <b>{casVSekundach}</b>
      <br/>Čas právě teď: <b>{hodina}:{minuta}:{vterina}</b>
    </>
  );
};
