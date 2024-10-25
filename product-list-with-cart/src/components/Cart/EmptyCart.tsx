function EmptyCart() {
  return (
    <div className="mx-auto space-y-4 text-center">
      <img
        src="illustration-empty-cart.svg"
        alt=""
        className="mx-auto size-32"
      />
      <p className="text-sm font-semibold text-rose-500">
        Your added items will appear here
      </p>
    </div>
  );
}

export default EmptyCart;
