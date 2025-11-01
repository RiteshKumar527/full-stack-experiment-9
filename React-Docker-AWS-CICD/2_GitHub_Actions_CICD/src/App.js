import React from 'react';

export default function App(){
  return (
    <div style={{fontFamily:'Arial, sans-serif', textAlign:'center', marginTop:80}}>
      <h1>Hello from React (CI/CD Example)!</h1>
      <p>If you push this repository the GitHub Actions workflow will build it.</p>
    </div>
  );
}
