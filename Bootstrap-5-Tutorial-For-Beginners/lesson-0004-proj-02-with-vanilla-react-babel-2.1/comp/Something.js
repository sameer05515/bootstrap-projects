// import {SomethingElse} from "./SomethingElse";

const SomethingElse = () => {
  return (
    <div>SomethingElse</div>
  )
}

const Something = () => {
  return (
    <>
      <h1>Hello from Something2 Component from comp folder!</h1>
      <h2>Babel stanalone can only use single jsx file. It does not resolve depending jsx files of main jsx file.</h2>
      <SomethingElse />
    </>
  );
};

export default Something;
