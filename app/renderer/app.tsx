import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router';

// 引入store
import store from './store';

// 引入Provider，作用: 通过 context 向子组件提供 store
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))