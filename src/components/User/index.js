const User = (props) => {
  return (
    <ul>
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
    </ul>
  )
};

export default User;