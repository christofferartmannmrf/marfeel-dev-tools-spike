import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import Widgets from './widgets';

const Container = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  border-right: solid 1px #E2E8F0;
  padding: 1rem;
  padding-right: 3rem;
`;
const SidebarItem = styled(Link)`
  color: #4A5568;
`;
const View = styled.div`
  color: #4A5568;
  padding: 1rem 2rem;
`;

export default function App(): ReactElement {
  return (
    <Router>
      <Container>
        <Sidebar>
          <SidebarItem to="/">
            Widgets
          </SidebarItem>
        </Sidebar>

        <View>
          {
            <Switch>
              <Route path="/">
                <Widgets />
              </Route>
            </Switch>
          }
        </View>
      </Container>
    </Router>
  );
}
