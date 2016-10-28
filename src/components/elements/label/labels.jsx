import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

/**
 * Group of labels which can share same size, shape or color
 */
export default class Labels extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes,
        /**
         * Labels can share shapes
         */
        circular: React.PropTypes.bool,
        /**
         * Labels can share colors together
         */
        color: React.PropTypes.string,
        /**
         * Labels can share tag formatting
         */
        tag: React.PropTypes.bool,
        /**
         * Labels can share sizes together
         */
        size: React.PropTypes.string
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const {
            component, children, defaultClasses, circular, color, tag, size, ...other
        } = this.props;

        let Component = component;
        other.className = classNames(other.className, this.getClasses());
        return (<Component {...other}>{children}</Component>);
    }

    getClasses() {
        let classes = {
            ui: this.props.defaultClasses,
            labels: this.props.defaultClasses,
            circular: this.props.circular,
            tag: this.props.tag
        };

        classes[this.props.color] = !!this.props.color;
        classes[this.props.size] = !!this.props.size;
        return classes;
    }
}

