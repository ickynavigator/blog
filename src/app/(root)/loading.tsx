import { Center, Loader } from '@mantine/core';

const Loading = () => {
  return (
    <Center h="100%">
      <Loader type="spinningCoin" size={128} />
    </Center>
  );
};

export default Loading;
