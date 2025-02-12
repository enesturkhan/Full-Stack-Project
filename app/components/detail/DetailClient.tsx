"use client"
import PageContainer from "../containers/PageContainer"

const DetailClient = (product: {product:any}) => {

  return (
      <div className="my-2 md:my-10">
          <PageContainer>
              {product}
   </PageContainer>
      </div>
      
  )
}

export default DetailClient