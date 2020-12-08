import { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
interface Props extends RouteComponentProps<any> {
  /* Parent component's props*/
}
export const ScrollToTop: React.FC<Props> = ({ history, location, match }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

export default withRouter(ScrollToTop);
