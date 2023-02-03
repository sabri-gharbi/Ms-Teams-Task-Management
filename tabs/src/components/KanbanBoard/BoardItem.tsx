import { CardBody, Card, Text } from "@fluentui/react-northstar";
import { Task } from "../../types/kanbanBoardTypes";
import { Issue } from "../../types/octokitTypes";

export type BoardItemProps = {
  task: Task<Issue>;
};

const BoardItem = ({ task }: BoardItemProps) => {
  //todo: each task status should have a diffrent bg color
  const bgColor = "yellow";

  return (
    <Card style={{ width: "95%", backgroundColor: bgColor }}>
      <CardBody>
        <Text>{task.body}</Text>
      </CardBody>

      {/* todo: add functionality to change issue status */}
    </Card>
  );
};

export default BoardItem;
