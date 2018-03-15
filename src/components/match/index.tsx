import * as React from 'react';
import { MatchType } from '../../types/index';
import * as CSSModules from 'react-css-modules';
import * as styles from './styles.css';
// const styles = require('./styles.css');

export interface Props {
    data: MatchType;
}

export interface State {
    
}

class Match extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        console.log('styles', styles);
        return (
            <div className={styles.container}>
                {data.players.map(item => item.name + '-')}
            </div>
        );
    }
}

CSSModules(Match, styles);

export default Match;
// export default ;