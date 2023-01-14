import { useEffect } from "react";
import { useState } from "react";
import { instance } from "../App";
import DeleteTwo from "./DeleteTwo";

const Delete = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get("/Link");
    setData(res.data.link);
  };

  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div>
      {data &&
        data.map((data) => {
          return (
            <div style={{ display: "flex" }}>
              <div>{data.shortLink}</div>
              <DeleteTwo value={data} />
            </div>
          );
        })}
    </div>
  );
};
export default Delete;
