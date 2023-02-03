import RepositoriesList from "../Repositories/RepositoryList";
import KanbanBoard from "../KanbanBoard";
import { Box } from "@fluentui/react-northstar";

function Home() {
  return (
    <Box style={{ padding: 10, minHeight: "100vh" }}>
      <RepositoriesList />
      {/* <KanbanBoard repositoryName="course-mangement-system" /> */}
    </Box>
  );
}

export default Home;
