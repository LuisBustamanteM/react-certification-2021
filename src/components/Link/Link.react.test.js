
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import Link from './Link.react';

test('Link changes the class when hovered', () => {
    const component =  renderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();

    act(() => {
        expect(tree).toMatchSnapshot();
    })

    act(() => {
        // manually trigger the callback
        tree.props.onMouseEnter();
    })

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
        // manually trigger the callback
        tree.props.onMouseLeave();
    })

    // re-rendering
    tree = component.toJSON();
    act(() => {
        expect(tree).toMatchSnapshot();
    })

});

test ('Custom Test', () => {
    let x = 10;
    console.log(10);

    expect(x).toEqual(10);
});