import { component$ } from "@builder.io/qwik";
import RGreetings from "../../integrations/react/greetings";

// Qwik component wrapping the React component
export default component$(() => { 
  return (
    <RGreetings />
  )
});