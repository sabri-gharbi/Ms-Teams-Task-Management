import RepositoriesList from "../Repositories/RepositoryList";
import { Box } from "@fluentui/react-northstar";

function Home() {
  return (
    <Box style={{ padding: 10, minHeight: "100vh" }}>
      <RepositoriesList />
    </Box>
  );
}

export default Home;
