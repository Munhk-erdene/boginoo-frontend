import { instance } from "../App";
const Remove = ({ value }) => {
  const remove = async () => {
    await instance.delete(`/Link/${value._id}`);
  };
  return (
    <div>
      <button onClick={remove}>Remove</button>
    </div>
  );
};
export default Remove;
