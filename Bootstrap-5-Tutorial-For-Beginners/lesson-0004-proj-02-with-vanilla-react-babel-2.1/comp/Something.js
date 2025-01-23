// import {SomethingElse} from "./SomethingElse";

const SomethingElse = () => {
  return (
    <div>SomethingElse</div>
  )
}

export const Something = () => {
  return (
    <>
      <h1>Hello from Something2 Component from comp folder!</h1>
      <SomethingElse />
    </>
  );
};
