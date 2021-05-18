import Todo from "./Todo";

const List = (props) => {
  return (
    <div>
      {props.todos.map((text, index) => (
        <Todo text={text} key={index} />
      ))}
    </div>
  );
};

export default List;
