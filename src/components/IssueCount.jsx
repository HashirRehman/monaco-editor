import { Box, Text } from "@chakra-ui/react";

const IssueCount = ({ count }) => {
  return (
    <Box
      w="100px"
      h="100%"
      bg="gray.800"
      color="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="lg" fontWeight="bold">
        {count}
      </Text>
      <Text fontSize="sm">Issues</Text>
    </Box>
  );
};

export default IssueCount;
