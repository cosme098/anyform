import { ReactChildren } from "react";
import { Style } from "util";


export interface IAnyformInput {
    noStyle?: boolean;
    style?: React.CSSProperties;
    className?: string;
    id?: string;
    hasFeedback?: boolean;
    required?: boolean;
    hidden?: boolean;
    initialValue?: any;
    messageVariables?: Record<string, string>;
}