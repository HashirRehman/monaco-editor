import { Box, Text, Button, VStack } from "@chakra-ui/react";

const IssueDetails = ({ issues }) => {
  return (
    <Box w="100%" h="100%" bg="gray.800" color="white" p={4}>
      <VStack spacing={4}>
        {issues.map((issue, index) => (
          <Box key={index}>
            <Text fontSize="sm" fontWeight="bold">
              {issue.message}
            </Text>
            <Text fontSize="xs" color="gray.400">
              {issue.file}:{issue.line}
            </Text>
          </Box>
        ))}
        <Button colorScheme="blue">Show All Issues</Button>
      </VStack>
    </Box>
  );
};

export default IssueDetails;
