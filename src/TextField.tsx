import React, { useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}
interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string; // function must be arrow function
  person: Person;
}

export const TextField: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<number | null | undefined>(5);
  setCount(undefined)
  return (
    <div>
      <input />
    </div>
  );
};
