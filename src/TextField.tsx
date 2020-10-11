import React from "react";

interface Props {
  text: string;
  ok: boolean;
  i: number;
  fn: (bob: string) => string; // function must be arrow function
  obj: {
    f1: string;
  };
}
const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};

export default TextField;
