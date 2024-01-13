/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';

// An existing React component
function Greetings() {
  return <h1>Hello from React</h1>;
}

export default qwikify$(Greetings);