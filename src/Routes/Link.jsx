import React from "react";
import { instance } from "../App";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Link = () => {
  const params = useParams();
  const getData = async () => {
    const res = await instance.get(`/Link/${params.shortLink}`);
    window.location.replace(res.data.link.longLink);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
};

export default Link;
