import { useState, useEffect } from 'react';

export default function Timer2() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    // 1. 타이머 콜백을 useEffect 내부로 이동
    const id = setInterval(() => {
      // 2. 업데이터 함수 (c => c + increment) 사용으로 count 의존성 제거
      setCount(c => c + increment);
    }, 1000);

    return () => clearInterval(id);
    // 3. increment가 변경될 때만 타이머를 재설정하도록 안전하게 지정
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
    </>
  );
}