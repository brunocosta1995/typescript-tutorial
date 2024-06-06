import { useState } from "react";

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  type Person = {
    name: string
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get('email') as string;
    const person: Person = {name: data.email as string};    
  }

  return (
    <section>
      <h2>Events handling</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input mb-1"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input className="form-input mb-1" type="email" value={email} onChange={handleChange}
        name="email"/>
        <button type="submit" className="btn btn-block">submit</button>
      </form>
    </section>
  );
}
export default Component;
