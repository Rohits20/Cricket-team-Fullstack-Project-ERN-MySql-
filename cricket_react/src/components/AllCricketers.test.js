import React from 'react';
import {act,render,fireEvent, getByText} from "@testing-library/react"
import { AllCricketers } from "./AllCricketers"



describe("Button Component", ()=>{
    it("rendered AllCricketers",()=>{
        const {getByTestId} = render (<AllCricketers/>);
        const button=getByText(/button1/i);
        expect(button1).toBeTruthy();
    });
});