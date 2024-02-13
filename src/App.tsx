import React from 'react';
import './App.css';
import AppContentTanStackQuery from './components/AppContentTanStackQuery';
import Header from './components/Header';
import AppContent from './components/AppContent';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <AppContentTanStackQuery />
        </div>
    );
};

export default App;
