import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Cards extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        link: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static childContextTypes = {
        isCardsChild: React.PropTypes.bool
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    getChildContext() {
        return {
            isCardsChild: true
        }
    }

    render() {
        let classes = {
            // default
            ui: this.props.defaultClasses,

            // types
            link: this.props.link || this.props.onClick,

            // component
            cards: this.props.defaultClasses
        };
        
        /* eslint-disable no-use-before-define */
        let {
            component, defaultClasses, children, link, ...other
        } = this.props;
        /* eslint-enable no-use-before-define */
        
        let Component = component;
        other.className = classNames(other.className, classes);

        return (
            <Component {...other}>
                {children}
            </Component>
        );
    }
}
