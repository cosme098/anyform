import "./styles.css";
import React from "react";
import { IAnyformInput, IAnyformInputGroup } from "./interfaces";


export const Input = (props: IAnyformInput) => {
    return (
        <input type="text" placeholder={props.placeholder} style={props.styles} />
    );
};

export const AnyForm = (props: IAnyformInputGroup) => {

    return (
        <div style={props.styles}>
            {
                props.children
            }
        </div>
    );
}