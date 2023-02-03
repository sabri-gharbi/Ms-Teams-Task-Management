import { Endpoints } from "@octokit/types";

export type Repository =
  Endpoints["GET /user/repos"]["response"]["data"][number];
