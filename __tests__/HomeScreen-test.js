import React from "react";
import HomeScreen from "../screens/HomeScreen";
import renderer from "react-test-renderer";

jest.mock("react-native-gesture-handler", () => {});


describe("Testing HomeScreen", () => {
    const tree = renderer.create(<HomeScreen/>);
    test("renders correctly", () => {
        expect(tree.toJSON()).toMatchSnapshot();


        describe("added task succesfully", () => {
            tree.toTree().rendered.instance.addElement();
            expect(tree.toTree().rendered.instance.state.managerData).toHaveLength(1);
        });


        describe("deleted task succesfully", () => {
            tree.toTree().rendered.instance.deleteElement();
            expect(tree.toTree().rendered.instance.state.managerData).toHaveLength(0);
        });


        //test if the right task is choosen


        // testing what we see on navigation view
        describe();

    });
});
