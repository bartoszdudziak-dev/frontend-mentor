type TextAreaProps = {
  id: string;
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

function Textarea({ value, setValue, id, name }: TextAreaProps) {
  const handleResize = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
  };

  return (
    <textarea
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
      name={name}
      id={id}
      placeholder="Add a comment..."
      className="min-h-24 cursor-pointer resize-none overflow-y-hidden rounded-lg border border-neutral-light-gray px-6 py-3 text-neutral-dark-blue caret-primary-moderate-blue outline-none focus:border-primary-moderate-blue"
      onInput={e => handleResize(e)}
    ></textarea>
  );
}

export default Textarea;
