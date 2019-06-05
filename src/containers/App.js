import React, { Component } from 'react';
import MenuTree from './component/menu'
import Helmet from 'react-helmet';
import classnames from 'classnames';
import styles from './styles/app.less';

class App extends Component {


  render() {
    return (
        <React.Fragment>
            <Helmet>
                <title>
                    ""
                </title>
            </Helmet>
                <div className={classnames(styles.LBodyOuter)}>
                    <div className={styles.header}>
                        logo
                    </div>
                    <div className={classnames(styles.LBody)}>
                        <div className={classnames(styles.LTree)}>
                            <MenuTree/>
                        </div>
                        <div className={classnames(styles.LContent)}>
                            zz
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
  }
}

export default App;
