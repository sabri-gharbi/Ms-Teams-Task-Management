import useGetRepositories from "../../hooks/useGetRepositories";
import { Box, Text } from "@fluentui/react-northstar";
import RepositortCard from "./RepositortCard";

const RepositoriesList = () => {
  const repositories = useGetRepositories();

  return (
    <Box>
      <Text size="larger" align="center" style={{ marginBottom: 10 }}>
        Repositories List
      </Text>

      <Box>
        {repositories.map((repository) => (
          <RepositortCard key={repository.id} {...{ repository }} />
        ))}
      </Box>
    </Box>
  );
};

export default RepositoriesList;
