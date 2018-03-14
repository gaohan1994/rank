import * as React from 'react';
import { incrementDemo, decrementDemo, DemoActions, receiveProducts } from '../../actions/demo';
import { Stores, MatchType } from '../../types/index';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface Props {
    matches: MatchType;
}

export interface State {
    
}

class Home extends React.Component<Props, State> {
    
    render() {
        return (
            <div>123</div>
        );
    }
}

export const mapStateToProps = (state: Stores) => ({
    
});

export const mapDispatchToProps = (dispatch: Dispatch<DemoActions>) => ({

});

export const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object) => 
    Object.assign({}, ownProps, stateProps, dispatchProps);

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Home);