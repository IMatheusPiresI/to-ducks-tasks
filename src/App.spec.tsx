import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

describe('<App />', () => {
  it('should display elements', () => {
    render( <Provider store={store}>
                 <App />
        </Provider>
        );
    expect(screen.getByText("TDucks")).toBeVisible();
  });
});