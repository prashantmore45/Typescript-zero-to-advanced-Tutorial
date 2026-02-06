type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    children: React.ReactNode;
}

const Counter = ({ setCount, children }: CounterProps) => {
    
    return (
        <>
            <h2>{children}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => prev - 1)}>-</button>
        </>
    );
}  

export default Counter;