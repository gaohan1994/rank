import * as React from 'react';
import { } from '../../types/index';
import * as CSSModules from 'react-css-modules';
import * as styles from './index.css';
interface Props {

}

interface State {
    
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

const PlayerHoc = CSSModules(Player, styles);

export default PlayerHoc;