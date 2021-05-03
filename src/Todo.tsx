type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  return <p>{`[未]${title}(ユーザ:${userId})`}</p>;
};
