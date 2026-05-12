function Input({ type, id, name, label, placeholder }) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="body-md-medium text-white">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="h-11.5 w-62.5 rounded-md bg-white pl-5"
      />
    </div>
  );
}

export default Input;
