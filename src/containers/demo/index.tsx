import * as actions from '../../actions/';
import DemoClass from '../../components/Demo';
import { Stores } from '../../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({demo: {test}}: Stores) {
    return {
        test,
    };
}

export const mapDispatchToProps = (dispatch: Dispatch<actions.NumberAction>) => ({
    
});

export const mergeProps = (stateProps: Object, dispatchProps: Object, ownProps: Object) => 
    Object.assign({}, ownProps, stateProps, dispatchProps);

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
    mergeProps
)(DemoClass);