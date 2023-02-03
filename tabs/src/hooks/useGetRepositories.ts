import { useState, useEffect } from "react";
import { Repository } from "../types/octokitTypes";
import { octokit } from "../utils/octokit";

const useGetRepositories = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const onLoad = async () =>
      await octokit
        .request("GET /user/repos", { owner: "sabri-gharbi" })
        .then((response) => {
          setRepositories(response.data);
        });

    onLoad();
  }, []);

  return repositories;
};
export default useGetRepositories;
