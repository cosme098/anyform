import React, { CSSProperties } from "react";
import "./styles.css";
import { IAnyformInput } from "./interfaces";

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

export const AnyForm = (props: any) => {
    const inputs: any[] = props.children;
    const totalValuesInputs: Array<any> = [];
    const customStyleContainer = props.style ? props.style : defaltContainer;

    const handleSubmit = () => {
        inputs.forEach((input: any) => {
            if (input.props?.required) {
                if (totalValuesInputs[input.props.name] == "") {
                    return alert("Preencha todos os campos");
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
                        <>
                            <input placeholder={input.props.placeholder} required={true} key={index} style={stylesInput} onChange={(e) => {
                                totalValuesInputs[input.props.name] = e.target.value;
                            }} />
                        </>
                    );
                })
            }
            <button onClick={() => handleSubmit()}>
                send
            </button>
        </div>
    );
}