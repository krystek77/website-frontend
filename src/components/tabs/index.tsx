import React from 'react';
import {
  Container,
  Inner,
  TabLinksWrapper,
  TabLink,
  TabContentWrapper,
  TabContent,
  ReactMarkdownContent,
} from './styles/tabs';

interface ITabsContext {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
}
const defaultTabsContext = {
  activeTab: 0,
  setActiveTab: (activeTab: number) => {},
};
const TabsContext = React.createContext<ITabsContext>(defaultTabsContext);

const TabsContextProvider: React.FC = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

const useTabContext = () => React.useContext(TabsContext);

interface ITabs {
  TabLinksWrapper: React.FC;
  TabLink: React.FC<{ tab: number }>;
  TabContentWrapper: React.FC;
  TabContent: React.FC<{ content: number }>;
  ReactMarkdownContent: React.FC<{
    inner: { id: number; content: string | undefined } | null;
  }>;
}
export const Tabs: React.FC & ITabs = ({ children }) => {
  return (
    <Container>
      <Inner>
        <TabsContextProvider>{children}</TabsContextProvider>
      </Inner>
    </Container>
  );
};
Tabs.TabLinksWrapper = function TabsTabLinksWrapper({
  children,
  ...restProps
}) {
  return <TabLinksWrapper {...restProps}>{children}</TabLinksWrapper>;
};
Tabs.TabLink = function TabsTabLink({ children, tab, ...restProps }) {
  const { activeTab, setActiveTab } = useTabContext();
  return (
    <TabLink
      {...restProps}
      active={activeTab === tab}
      onClick={() => {
        console.log(tab);
        setActiveTab(tab);
      }}
    >
      {children}
    </TabLink>
  );
};
Tabs.TabContentWrapper = function TabsTabContentWrapper({
  children,
  ...restProps
}) {
  return <TabContentWrapper {...restProps}>{children}</TabContentWrapper>;
};
Tabs.TabContent = function TabsTabContent({ children, content, ...restProps }) {
  const { activeTab } = useTabContext();
  return content === activeTab ? (
    <TabContent {...restProps}>{children}</TabContent>
  ) : null;
};
Tabs.ReactMarkdownContent = function TabsReactMarkdownContent({ inner }) {
  return inner ? (
    <ReactMarkdownContent>{inner.content}</ReactMarkdownContent>
  ) : null;
};
export default Tabs;
