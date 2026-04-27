function TextArea({ id, name, label, placeholder }) {
  return (
    <div className="gap flex flex-col gap-2.5">
      <label htmlFor={id} className="body-md-medium text-white">
        {label}
      </label>

      <textarea
        name={name}
        id={id}
        className="h-38.5 w-90 resize-none rounded-md bg-white pt-5 pl-5 lg:w-125"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

export default TextArea;
