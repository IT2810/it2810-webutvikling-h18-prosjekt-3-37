import React from 'react'
import renderer from 'react-test-renderer'
import Todo from '../Todo/Todo'

//Check that AddTodo-Component renders correctly and matches snapshot
it('renders correctly', () => {
    const tree = renderer.create(<Todo />).toJSON()
    expect(tree).toMatchSnapshot()
})


