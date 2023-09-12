import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/DushyantSinghInda")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1 className="mb-7 text-5xl text-orange-500">{data.name}</h1>
      Github followers : {data.public_repos}
      <img
        src={data.avatar_url}
        alt="Profile Image"
        className="mx-auto my-5 w-72 rounded-2xl aspect-square"
      />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/DushyantSinghInda"
  );
  return response.json();
};
