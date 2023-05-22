import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <Counter />

      <MyForm onSubmit={onSubmit} />

      <ReducerSample />
    </div>
  );
}

export default App;
