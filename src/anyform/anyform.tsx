import React, { CSSProperties } from "react";
import "./styles.css";
import "./styles.css";
import { IAnyformTag } from "./interfaces";

const defaltInput: CSSProperties = {
    border: "0.7px solid #818181",
    borderRadius: "3px",
    height: "1.5rem",
    outline: "none",
};

const defaltContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
};

export const AnyForm = (props: IAnyformTag) => {
    const inputs: any[] = props.children;
    const totalValuesInputs: Array<any> = [];
    const customStyleContainer = props.style ? props.style : defaltContainer;

    const handleSubmit = () => {
        inputs.forEach((input: any) => {
            if (input.props?.required) {
                if (totalValuesInputs[input.props.name] === "") {
                    throw new Error("Campo obrigatório");
                }
            }
        });
        props.onSuccess(totalValuesInputs);
    }

    return (
        <div style={customStyleContainer}>
            {
                inputs.map((input: any, index: number) => {
                    totalValuesInputs[input.props.name] = "";
                    const stylesInput = input.props.style ? input.props.style : defaltInput;
                    return (
                        <input placeholder={input.props.placeholder} key={index + "field"} style={stylesInput} onChange={(e) => {
                            totalValuesInputs[input.props.name] = e.target.value;
                        }} />
                    );
                })
            }
            <button onClick={handleSubmit} className="button-16" >Enviar</button>
        </div>
    );
}