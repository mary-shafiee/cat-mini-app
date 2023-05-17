import userService, { Cat } from "@/services/cat-servises";
import React, { useEffect, useState } from "react";
import { CanceledError } from "../services/api-client";

const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancel } = userService.getWithMinWeight<Cat>();

    request
      .then((res) => {
        setCats(res.data);
        setIsLoading(false);
        console.log(res);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);
  return { cats, error, isLoading, setError, setIsLoading, setCats };
};

export default useCats;
