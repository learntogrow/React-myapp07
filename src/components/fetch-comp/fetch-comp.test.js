import React from "react";
import { shallow } from "enzyme";
import FetchComp from "./fetch-comp";

/* #regression */
describe("Fetch Component", () => {

    beforeAll(() => {
        global.fetch = jest.fn();
        //window.fetch = jest.fn(); if running browser environment
    });

    
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FetchComp />, { disableLifecycleMethods: true }); // we will call component didmount, shallow is doing render..
    });
    afterEach(() => {
        wrapper.unmount();
    });

    it("must render a loading span before api call success", () => {
        expect(wrapper.find("span.spinner").exists()).toBeTruthy();
    });

    it("must show the p.user and hide the loading span after api call success",
        (done) => {
            // here we are spying on componentDidMount to know that it has been called
            const spyDidMount = jest.spyOn(FetchComp.prototype, "componentDidMount");

            fetch.mockImplementation(() => {
                return Promise.resolve({
                    status: 200,
                    json: () => {
                        return Promise.resolve({
                            userName: "manas",
                            userId: 1
                        });
                    }
                });
            });

            const didMount = wrapper.instance().componentDidMount();

            // expecting componentDidMount have been called
            expect(spyDidMount).toHaveBeenCalled();

            didMount.then(() => {
                // updating the wrapper
                wrapper.update();
                expect(wrapper.find("p.user").text()).toContain("manas");
                expect(wrapper.find("spans.loading").length).toBe(0);
                spyDidMount.mockRestore();
                fetch.mockClear();
                done();
            });
        });


})