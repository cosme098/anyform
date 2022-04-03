import { ReactChildren } from "react";
import { Style } from "util";


export interface IAnyformInput {
    styles?: any;
    placeholder?: string;
}

export interface IAnyformInputGroup extends ReactChildren {
    styles?: any;
} 