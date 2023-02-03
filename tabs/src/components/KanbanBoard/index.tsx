import { Grid, Text, Divider } from "@fluentui/react-northstar";
import { Task } from "../../types/kanbanBoardTypes";
import { Issue } from "../../types/octokitTypes";
import useGetIssues from "../../hooks/useGetIssues";
import BoardColumn from "./BoardColumn";

export type KanbanBoardProps = { repositoryName: string };

const KanbanBoard = ({ repositoryName }: KanbanBoardProps) => {
  const issues = useGetIssues(repositoryName);
  const tasks: Task<Issue>[] = issues.map((issue) => ({
    ...issue,
    status: "notSet",
  }));

  return (
    <>
      <Text size="larger" align="center">
        Kanban Board
      </Text>

      <Divider color="black" style={{ marginBlock: 5 }} />

      <Grid columns={4}>
        <BoardColumn
          title="Not Set"
          tasks={tasks.filter((task) => task.status === "notSet")}
        />

        <BoardColumn
          title="To Do"
          tasks={tasks.filter((task) => task.status === "todo")}
        />

        <BoardColumn
          title="In Progress"
          tasks={tasks.filter((task) => task.status === "inProgress")}
        />

        <BoardColumn
          title="Done"
          tasks={tasks.filter((task) => task.status === "done")}
        />
      </Grid>
    </>
  );
};

export default KanbanBoard;
