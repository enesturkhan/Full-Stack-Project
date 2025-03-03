import { Avatar, Rating } from "@mui/material"

const Comment = ( {prd}: {prd:any}) => {

  const productRating = prd?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / prd?.reviews?.length

  return (
    <div className="border rounded-xl p-4 shadow-md bg-white flex gap-3 items-start my-2">
   
    <Avatar  alt={prd.user} />

   
    <div className="flex flex-col flex-1 ">
      <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-900">{prd.user}</p>
         
        <span className="text-sm text-gray-500">{prd.date || "Tarih Yok"}</span>
        </div>
        <div>
          <Rating name="read-only" value={productRating} readOnly />
         </div>
        <p className="text-gray-700 mt-1">{prd.comment}</p>
       
    </div>
  </div>
  )
}

export default Comment