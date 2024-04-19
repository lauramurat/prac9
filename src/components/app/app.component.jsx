import React from 'react';
import { Routes, Route, NavLink as Link } from 'react-router-dom';

// import child components
import { Counter } from '../counter';
import { Post } from '../post';

// компонент приложения для ввода экспортных данных
export class App extends React.Component {
    constructor() {
        console.log( 'App.constructor()' );
        super();
    }

    // render view
    render() {
        console.log( 'App.render()' );

        return (
            <div className='ui-app'>
                <div className='ui-app__navigation'>
                    <Link className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/counter'
                        exact={ true }
                    >Counter</Link>

                    <Link className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/post'
                        exact={ true }
                    >Post</Link>
                </div>

                <Routes>
                    <Route path='/counter'
                        exact={ true }
                        element={ <Counter name='QUANTITY'/> }
                    />

                    <Route
                        path='/post'
                        exact={ true }
                        element={ <Post /> }
                    />
                </Routes>

            </div>
        );
    }
}
