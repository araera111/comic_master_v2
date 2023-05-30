import { Box } from "@chakra-ui/react";
import "./App.css";
import { Viewer } from "./features/Viewer/components/Viewer";

export const App = () => (
  <Box h="100dvh" w="100dvw" bgColor="gray.800">
    <Viewer />
  </Box>
);
