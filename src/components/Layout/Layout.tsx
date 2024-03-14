import { Wrapper, InnerWrapper } from './styles';
import { LayoutType } from './types';

const Layout = ({ children }: LayoutType) => (
  <Wrapper>
    <InnerWrapper>
      {children}
    </InnerWrapper>
  </Wrapper>
);

export default Layout;