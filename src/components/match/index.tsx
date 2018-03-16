import * as React from 'react';
import { MatchType } from '../../types/index';
// import * as styles from './styles.css';
import * as styles from './styles.css';

interface Props {
    data: MatchType;
}

interface State {
    
}

class Match extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <div className={styles.container}>
                {data.players.map(item => item.name + '-')}
            </div>
        );
    }
}

export default Match;