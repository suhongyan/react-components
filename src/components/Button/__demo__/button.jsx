import React from 'react';

import Button from 'src/components/Button';
import Form from 'src/components/Form';
import Radio from 'src/components/Radio';
import Switch from 'src/components/Switch';

// demo start
const { StyleTypes, Sizes, Shapes, defaultProps } = Button;
const IconTypes = ['undefined', 'circle-fill', 'circle', 'loading'];
class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            styleType: defaultProps.styleType,
            size: defaultProps.size,
            shape: 'undefined',
            icon: IconTypes[0],
            disabled: false,
            fakeDisabled: false
        };
    }
    render() {
        const { styleType, size, shape, icon, loading, disabled, fakeDisabled } = this.state;
        const itemLayout = {
            labelCol: {
                span: 3
            },
            controllerCol: {
                span: 9
            }
        };
        const props = {
            styleType,
            shape,
            size,
            icon,
            loading,
            disabled,
            fakeDisabled
        };
        if (shape === 'undefined') {
            delete props.shape;
        }
        if (icon === 'undefined') {
            delete props.icon;
        }
        return (
            <div>
                <Form className="demo-form">
                    <Form.Item label="styleType" {...itemLayout}>
                        <Radio.Group
                            options={StyleTypes.map(styleType => ({ value: styleType }))}
                            value={styleType}
                            onChange={styleType => this.setState({ styleType })}
                        />
                    </Form.Item>
                    <Form.Item label="size" {...itemLayout}>
                        <Radio.Group
                            options={Sizes.map(size => ({ value: size }))}
                            value={size}
                            onChange={size => this.setState({ size })}
                        />
                    </Form.Item>
                    <Form.Item label="shape" {...itemLayout}>
                        <Radio.Group
                            options={['undefined', ...Shapes].map(shape => ({ value: shape }))}
                            value={shape}
                            onChange={shape => this.setState({ shape })}
                        />
                    </Form.Item>
                    <Form.Item label="icon" {...itemLayout}>
                        <Radio.Group
                            options={IconTypes.map(icon => ({ value: icon }))}
                            value={icon}
                            onChange={icon => this.setState({ icon })}
                        />
                    </Form.Item>
                    <Form.Item label="loading" {...itemLayout}>
                        <Switch checked={loading} onChange={loading => this.setState({ loading })} />
                    </Form.Item>
                    <Form.Item label="disabled" {...itemLayout}>
                        <Switch checked={disabled} onChange={disabled => this.setState({ disabled })} />
                    </Form.Item>
                    <Form.Item label="fakeDisabled" {...itemLayout}>
                        <Switch checked={fakeDisabled} onChange={fakeDisabled => this.setState({ fakeDisabled })} />
                    </Form.Item>
                </Form>
                <Button {...props} onClick={console.log}>
                    Button
                </Button>
            </div>
        );
    }
}
// demo end

export default Demo;
