import React, {useEffect, useState} from 'react';

export default function App(){
  const [msg, setMsg] = useState('Loading...');
  useEffect(() => {
    fetch('/api/message')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('Could not fetch from backend'));
  }, []);
  return (
    <div style={{fontFamily:'Arial, sans-serif', textAlign:'center', marginTop:80}}>
      <h1>Full Stack App (Frontend)</h1>
      <p>{msg}</p>
    </div>
  );
}
