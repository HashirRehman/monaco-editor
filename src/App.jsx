import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";
import Sidebar from "./components/Sidebar";
import { HStack } from "@chakra-ui/react";
import IssueCount from "./components/IssueCount";
import IssueDetails from "./components/IssueDetails";
import { Grid, GridItem } from "@chakra-ui/react";
import Output from "./components/Output";

function App() {
  const fileTree = [
    {
      type: "directory",
      name: "Example Folder",
    },
    {
      type: "file",
      name: "Example File 1",
    },
  ];

  const issueCount = 5;

  const issues = [
    {
      message: "Error: Unexpected token",
      file: "example.js",
      line: 10,
    },
  ];

  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Grid templateColumns="repeat(6, 1fr)" gap={4}>
        <GridItem w="130%" h="100%" colSpan={5}>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem w="100%" h="100%" colSpan={4}>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem w="150%" h="100%" colSpan={1}>
                  <Sidebar fileTree={fileTree} />
                </GridItem>
                <GridItem w="100%" h="100%" colSpan={3}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem w="150%" h="100%" colSpan={1}>
                      <CodeEditor />
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem w="100%" h="100%" colSpan={1}>
              <IssueCount count={issueCount} />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem w="100%" h="100%" colSpan={1}>
          <IssueDetails issues={issues} />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
