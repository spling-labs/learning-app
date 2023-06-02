import React from "react";
import { Text as RNText } from 'react-native'

//ASSETS
import { COLORS } from "../assets";

//CONSTANTS
import { FONT } from "../constants/font";

const Text = (props: any) => {
    return (
        <RNText {...props}
            style={[props.style,
            {
                color: props.color,
                textAlign: props.align,
                fontSize: typeof (props.size) == 'string' ? parseInt(props.size) : (props.size),
            },
            props.fontFamily != '' && {
                fontFamily: props.fontFamily
            }]}>
            {props.children}
        </RNText>
    )
}


Text.defaultProps = {
    style: {},
    align: 'left',
    size: 14,
    family: FONT.regular,
    color: COLORS.black
};

export default Text;
