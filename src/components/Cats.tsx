import useCats from "@/hooks/useCats";
import { Spin } from "antd";
import React from "react";
import CatCard from "./CatCard";

const Cats = () => {
  const { cats, error, isLoading, setError, setCats } = useCats();
  return (
    <>
      {isLoading && <Spin tip="Loading" size="large" />}
      {error && <p>{error}</p>}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-row flex-wrap flex-1 gap-8">
          {cats.map((cat) => (
            <CatCard
              image={cat.image_link}
              breed={cat.name}
              grooming={cat.grooming}
              playfulness={cat.playfulness}
              key={cat.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cats;
