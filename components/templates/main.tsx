import HeaderContainer from '../organisms/container/header'
import StatusContainer from '../organisms/container/status'
import { IdeaContainer } from '../organisms/container/idea'
import FooterContainer from "../organisms/container/footer";

const MainTemplate = () => {
  return (
    <>
      <HeaderContainer />
      <StatusContainer />
      <IdeaContainer />
      <FooterContainer />
    </>
  );
};

export default MainTemplate;
