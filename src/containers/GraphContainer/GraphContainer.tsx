import Layout from '../../components/Layout';
import { EmptyPlaceholderWrapper, ErrorText, Link, Subtitle, Title, Wrapper } from './styles';
import Graph from '../../components/Graph';
import FadeIn from '../../components/animations/FadeIn';
import { Skeleton } from '@mui/material';
import useFetchContributions from '../../hooks/useFetchContributions';

const GraphContainer = () => {
  const { contributions, error, loading } = useFetchContributions()


  return (
    <Layout>
      <Wrapper>
        <FadeIn delay={0.4} duration={0.6}>
          <Title>
            Concourse Graph
          </Title>
        </FadeIn>
        <FadeIn delay={0.6} duration={0.6}>
          <Subtitle>
            Coding challenge from {' '} <Link href='https://github.com/stephendandrea'>@stephendandrea</Link>
          </Subtitle>
        </FadeIn>
        <FadeIn delay={0.7} duration={0.6}>
          {!loading && !error && contributions ? (
            <Graph contributions={contributions} />
          ) : (
            <EmptyPlaceholderWrapper>
              {error ? (
                <ErrorText>{error}</ErrorText>
              ) : (
                <Skeleton width="100%" height="100%" animation="wave" variant="rectangular" sx={{ backgroundColor: theme => theme.colors.ocean[100] }} />
              )}
            </EmptyPlaceholderWrapper>
          )}
        </FadeIn>
      </Wrapper>
    </Layout>
  )
};

export default GraphContainer;