import React from 'react';
import './App.css';
import AppContent from './components/AppContent';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <AppContent />
        </div>
    );
};

export default App;
