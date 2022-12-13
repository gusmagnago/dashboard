import { Dot, LoaderWrapper } from './styles';

const Loader = () => {
  return (
    <LoaderWrapper data-testid={'loader'}>
      <Dot delay={'0s'} />
      <Dot delay={'0.3s'} />
      <Dot delay={'0.5s'} />
    </LoaderWrapper>
  );
};

export default Loader;
