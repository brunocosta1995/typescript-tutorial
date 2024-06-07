type BasicPerson = {
  type: "basic";
  name: string;
};

type AdvancedPerson = {
  type: "advanced";
  name: string;
  email: string;
};

type Profile = BasicPerson | AdvancedPerson

function Component(props: Profile) {
  const {type, name} = props

  if (type === 'basic') {
    return (
      <div className="alert alert-success">
      <h2>
        {name}
      </h2>
    </div>
    )
  }

  return (
    <div className="alert alert-danger">
      <h2>
        {name}<br/>
        {props.email}
      </h2>
    </div>
  );
}
export default Component;
