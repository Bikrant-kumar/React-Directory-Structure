import React from 'react';
import Parent from './Parent';

function App() {

  const filesJson = [
    {
      name: 'USA',
      children: [
        {
          name: 'Texas',
        },
      ],
    },
    {
      name: 'India',
      children: [
        {
          name: 'West Bengal',
        },
        {
          name: 'Bihar',
          children: [
            {
              name: 'Patna'
            },
            {
              name: 'Bhagalpur'
            },
          ],
        },
        {
          name: 'Uttar Pradesh',
        },
        {
          name: 'Jharkhand',
          children: [
            {
              name: 'Ranchi',
            },
            {
              name: 'Dhanbad',
              children: [
                {name: 'Hirapur'},
                {name: 'Bankmore'}
              ]
            },
          ],
        },
      ],
    },{
      name:"United Kindom"
    }
  ];

  return (
    <div className="App">
    I am in React
    {filesJson.map (({name,children})=>{
      return (
        <Parent name={name} children={children}/>
      )
    })}
  </div>
  );
}

export default App;

