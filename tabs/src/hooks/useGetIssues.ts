import { useState, useEffect } from "react";
import { Issue } from "../types/octokitTypes";
import { octokit } from "../utils/octokit";

const useGetIssues = (repositoryName: string) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const owner = process.env.REACT_APP_GH_USERNAME || "sabri-gharbi";

  useEffect(() => {
    const onLoad = async () =>
      await octokit
        .request("GET /repos/{owner}/{repo}/issues", {
          owner: owner,
          repo: repositoryName,
        })
        .then((response) => {
          setIssues(response.data);
        });

    onLoad();
  }, [owner, repositoryName]);

  return issues;
};
export default useGetIssues;
