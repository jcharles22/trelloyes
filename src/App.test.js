import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Components/Card';
import List from './Components/List';

describe('Card component', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <Card/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card
        key={2}
        title={'first'}
        content={'lorem ipsum'}
        />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});

describe('List component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render( <List/>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        
        const tree = renderer
          .create(<List
            key={2}
            header={"first"}
            cards={['a']} 
            />
           )
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
    });
