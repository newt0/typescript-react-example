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

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({}) => {
  const [count, setCount] = useState<TextNode>({text: "hello"});

  return (
    <div>
      <input />
    </div>
  );
};
