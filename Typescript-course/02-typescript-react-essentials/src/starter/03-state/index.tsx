import { useState } from "react";

type Links = {
  id: number;
  url: string;
  text?: string;
};

const navLinks: Links[] = [
  {
    id: 1,
    url: "text1",
    text: "other text1",
  },
  {
    id: 2,
    url: "text2",
    text: "other text2",
  },
  {
    id: 3,
    url: "text3",
    text: "other text3",
  },
];

function Component() {
  const [text, setText] = useState("inicial");
  const [number, setNumber] = useState(0);
  const [list, setList] = useState<number[]>([]);
  const [links, setLinks] = useState<Links[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">
        React & Typescript - State: {text} - {number} - {list[0]} - {links[0].text}
      </h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setText("final");
          setNumber(9);
          setList([1, 2, 3, 4]);
          setLinks([...links, {id: 4, url: 'text4'}]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
