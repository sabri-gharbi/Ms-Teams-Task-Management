import { useState, useEffect } from "react";
import { Repository } from "../types/octokitTypes";
import { octokit } from "../utils/octokit";

const useGetRepositories = () => {
  const owner = process.env.REACT_APP_GH_USERNAME;
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const onLoad = async () =>
      await octokit
        .request("GET /user/repos", {
          owner: owner,
        })
        .then((response) => {
          setRepositories(response.data);
        });

    onLoad();
  }, []);

  return repositories;
};
export default useGetRepositories;
