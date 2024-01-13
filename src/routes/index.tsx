import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Greetings from "~/components/greetings/greetings";
import Test from "~/components/test/test";

export default component$(() => {
  return (
    <>
      <Greetings />
      <Test />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
