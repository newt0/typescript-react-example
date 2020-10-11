import React from "react";

interface Props {
  text: string;
  ok: boolean;
  i: number;
  fn: () => (void) // function must be arrow function 
}
const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};

export default TextField;
