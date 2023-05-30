import { Box, Center, Image } from "@chakra-ui/react";

export const SingleView = () => {
  const a = "";
  return (
    <Box
      mx="auto"
      bgColor="gray.800"
      color="white"
      overflow="hidden"
      display="flex"
    >
      <Center>
        <Image
          src="https://cdn-static.kakuyomu.jp/image/44gYHRqe"
          objectFit="cover"
          w="dvw"
          h="dvh"
        />
      </Center>
    </Box>
  );
};
