import React from "react";

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
const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};

export default TextField;
