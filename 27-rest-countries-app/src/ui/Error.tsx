function Error({ message }: { message: string }) {
  return (
    <div className="mx-auto my-20 text-lg font-extrabold uppercase md:my-40 xl:text-xl">
      {message}
    </div>
  );
}

export default Error;
