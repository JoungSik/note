import HeaderContainer from '../organisms/container/header'
import StatusContainer from '../organisms/container/status'
import { IdeaContainer } from '../organisms/container/idea'
import FooterContainer from '../organisms/container/footer'

import { Item } from '../../types/item'

const MainTemplate = () => {
  return (
    <>
      <HeaderContainer />
      <StatusContainer />
      <IdeaContainer items={Array<Item>(0)} />
      <FooterContainer />
    </>
  );
};

export default MainTemplate;
