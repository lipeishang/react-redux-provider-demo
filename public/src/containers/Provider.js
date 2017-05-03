import { Component, PropTypes, Children } from 'react';
import storeShape from '../../../storeShape';

let didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
    if (didWarnAboutReceivingStore) {
        return
    }
    didWarnAboutReceivingStore = true

}

export default class Provider extends Component {
    getChildContext() {
        return { store: this.store }
    }

    constructor(props, context) {
        super(props, context);
        this.store = props.store
    }

    render() {
        return Children.only(this.props.children)
    }
}

if (process.env.NODE_ENV !== 'production') {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
        const { store } = this;
        const { store: nextStore } = nextProps;

        if (store !== nextStore) {
            warnAboutReceivingStore()
        }
    }
}

Provider.propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
};
Provider.childContextTypes = {
    store: storeShape.isRequired
};
