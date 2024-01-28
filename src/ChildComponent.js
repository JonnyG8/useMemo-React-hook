import React from 'react';
import {useMemo} from 'react';

function ChildComponent(props) {
  const someCalculation = useMemo(() => {
    console.log('The calculation is started...');
    console.log(props.number.length * 2);
    return props.number.length * 2;
  }, [props.number]);

  return (
    <div>
      <p>The result of big calculation: {someCalculation}</p>
    </div>
  )
}

export default ChildComponent;
