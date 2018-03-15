import * as React from 'react';
import { } from '../../types/index';
import * as CSSModules from 'react-css-modules';
// import * as styles from './index.css';
const styles = require('./index.css');

export interface Props {

}

export interface State {
    
}

class Player extends React.Component<Props, State> {

    render() {
        return (
            <div styleName="container">
                123
            </div>
        );
    }
}

CSSModules(Player, styles);

export default Player;