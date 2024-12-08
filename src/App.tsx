import {useState} from 'react';
import './App.css';
import {Card} from './components/Card';
import clsx from 'clsx';
import {useToggle} from './hooks/useToggle';

const forcedConditionalHook = false;

function App() {
    if (forcedConditionalHook) {
        return <p>Hook is being called conditionally</p>;
    }

    const [isCardOpen, toggleValue] = useToggle(false);

    return (
        <main className="space-y-10">
            <h1>Biomejs</h1>

            <div className="space-y-4">
                <button onClick={toggleValue}>Toggle Card</button>

                <div
                    className={clsx(
                        'max-w-xl transition-transform',
                        isCardOpen
                            ? 'opacity-1 scale-y-100'
                            : 'opacity-0 scale-y-0'
                    )}
                >
                    <Card
                        cover={{
                            source: 'https://placehold.co/128?text=Hello',
                            altText: 'Hello text over a grey background',
                        }}
                        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt doloribus unde aspernatur consectetur obcaecati odit delectus vel rerum?"
                        onCancel={() => console.log('Canceled click')}
                        onConfirm={() => console.log('Confirmed click')}
                    />
                </div>
            </div>
        </main>
    );
}

export default App;
