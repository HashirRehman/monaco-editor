import { Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { FaFolder, FaFile } from "react-icons/fa";

const Sidebar = ({ fileTree }) => {
  return (
    <Box w="25%" bg="#110c1b" color="gray.500" p={4}>
      <Text fontSize="lg" mb={2}>
        Project Files
      </Text>
      <List spacing={2}>
        {fileTree.map((item) => {
          if (item.type === "directory") {
            return (
              <ListItem key={item.name}>
                <ListIcon as={FaFolder} color="gray.400" />
                <Text as="span" fontSize="sm" cursor="pointer">
                  {item.name}
                </Text>
              </ListItem>
            );
          } else {
            return (
              <ListItem key={item.name}>
                <ListIcon as={FaFile} color="gray.400" />
                <Text as="span" fontSize="sm" cursor="pointer">
                  {item.name}
                </Text>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
