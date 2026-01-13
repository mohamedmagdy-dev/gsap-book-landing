export default function Chapter({ title, name, content, img, bg }) {
  return (
    <div
      className="chapter relative h-screen w-screen p-20 flex gap-10 min-lg:gap-50 justify-evenly items-center max-sm:flex-col"
      
    >
      <div className="content min-md:w-[600px]">
        <span className="text-red-500 max-sm:text-2xl  text-5xl font-bold">{title}</span>
        <h2 className="mt-8 mb-8 max-sm:text-3xl text-6xl font-bold">{name}</h2>
        <p className="text-gray-500 max-sm:text-sm ">{content}</p>
      </div>
      <div className="book-img relative min-lg:w-[380px] rounded-md">
        <div className="w-full h-full absolute  z-[-1] left-5 top-5 rounded-md" style={{ backgroundColor: bg }}></div>
        <img
          className="w-full h-full object-contain rounded-md"
          src={img}
          alt="book-img"
        />
      </div>
    </div>
  );
}
