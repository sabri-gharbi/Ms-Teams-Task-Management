import RepositoriesList from "../Repositories/RepositoriesList";
import { Box } from "@fluentui/react-northstar";

function Home() {
  return (
    <Box style={{ padding: 8, minHeight: "100vh" }}>
      <RepositoriesList />
    </Box>
  );
}

export default Home;
