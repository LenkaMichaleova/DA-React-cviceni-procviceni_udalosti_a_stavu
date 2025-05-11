import { useState } from "react";
// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypište do `<output></output>` jejich součet.

export const Bonus4 = () => {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  return (
    <>
      <input type="number" defaultValue={number1} onChange={(e) => setNumber1(Number(e.target.value))}/> +{' '}
      <input type="number" defaultValue={number2} onChange={(e) => setNumber2(Number(e.target.value))}/> = 
      <output>{number1 + number2}</output>
    </>
  );
};
