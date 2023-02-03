import useGetRepositories from "../../hooks/useGetRepositories";
import { useMemo } from "react";
import { Box, Text, List, Image } from "@fluentui/react-northstar";

const RepositoriesList = () => {
  const repositories = useGetRepositories();

  const items = useMemo(
    () =>
      repositories.map((repo) => ({
        key: repo.id,
        header: repo.name,
        content: repo.description || "no description found !!",
        media: (
          <Image
            avatar
            //this is a random image
            src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/RobertTolbert.jpg"
          />
        ),
      })),
    [repositories]
  );

  return (
    <Box>
      <Text size="large" align="center">
        Repositories List
      </Text>

      <List items={items} selectable />
    </Box>
  );
};

export default RepositoriesList;
