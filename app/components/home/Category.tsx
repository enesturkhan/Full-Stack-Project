 "use client"
const Category = () => {
    const categoryList = [
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        },
        {
            name:"Ayakkabı"
        }
    ]
  return (
      <div className="flex justify-center items-center gap-3 md:gap-10 my-5 md:my-10 px-3 md:px-10 py-5 md:py-8 overflow-x-auto">
          {categoryList.map((category, i) =>
          (
              <div className="border text-slate-500 rounded-full min-w-[120px] px-4 py-2 text-center flex flex-1 justify-center items-center cursor-pointer" key={i}>{ category.name }</div>
          )
          )}
    </div>
  )
}

export default Category