import { useState } from "react";

type FormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: FormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span> 이름</span>{" "}
        <input name="name" value={name} onChange={onChange} />
      </div>
      <div>
        <span>설명</span>
        <input name="description" value={description} onChange={onChange} />
      </div>
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
