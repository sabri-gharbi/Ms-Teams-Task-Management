import { Repository } from "../../types/octokitTypes";
import { Card, CardBody, CardHeader, Text } from "@fluentui/react-northstar";

export type RepositortCardProps = { repository: Repository };

const RepositortCard = ({ repository }: RepositortCardProps) => {
  return (
    <Card
      style={{
        width: "90%",
        height: "auto",
        marginInline: "auto",
        marginBottom: 4,
      }}
    >
      <CardHeader>
        <Text content={repository.name} weight="bold" />
      </CardHeader>

      <CardBody>
        <Text
          content={repository.description || "no description found !!"}
          color={repository.description ? "green" : "red"}
        />
      </CardBody>
    </Card>
  );
};

export default RepositortCard;
