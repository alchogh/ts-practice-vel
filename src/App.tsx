import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div className="App">
      <Counter />

      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
