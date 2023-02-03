import { Endpoints } from "@octokit/types";

export type Repository =
  Endpoints["GET /user/repos"]["response"]["data"][number];

export type Issue =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"][number];
