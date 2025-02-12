"use client"
import PageContainer from "../containers/PageContainer"

const DetailClient = ({product}: {product:any}) => {

  return (
      <div className="my-2 md:my-10">
          
          <PageContainer>
              <h1>One Milion Dolar</h1>
              {product?.name}

          </PageContainer>

      </div>
      
  )
}

export default DetailClient