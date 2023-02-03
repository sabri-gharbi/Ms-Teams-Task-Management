import { Box, Text } from "@fluentui/react-northstar";
import { Task } from "../../types/kanbanBoardTypes";
import { Issue } from "../../types/octokitTypes";
import BoardItem from "./BoardItem";

export type BoardColumnProps = {
  title: string;
  tasks: Task<Issue>[];
};

const BoardColumn = ({ title, tasks }: BoardColumnProps) => {
  return (
    <Box>
      <Text weight="bold">{title}</Text>
      {tasks.map((task) => (
        <BoardItem key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default BoardColumn;
