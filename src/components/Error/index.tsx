const Error = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center">
      <button
        onClick={() => window.location.reload()}
        className="p-2 bg-zinc-500 rounded-lg flex flex-col items-center gap-y-2"
      >
        <span>Hata</span>
        <span>Sayfayı Yenile</span>
      </button>
    </div>
  );
};

export default Error;
