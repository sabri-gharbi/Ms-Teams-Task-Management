import useGetRepositories from "../../hooks/useGetRepositories";
import { Box, Text, Divider } from "@fluentui/react-northstar";
import RepositortCard from "./RepositortCard";

const RepositoriesList = () => {
  const repositories = useGetRepositories();

  return (
    <Box>
      <Text size="larger" align="center">
        Repositories List
      </Text>

      <Divider color="black" style={{ marginBlock: 5 }} />

      <Box>
        {repositories.map((repository) => (
          <RepositortCard key={repository.id} {...{ repository }} />
        ))}
      </Box>
    </Box>
  );
};

export default RepositoriesList;
