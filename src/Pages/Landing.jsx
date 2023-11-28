import { FeaturedProducts, Hero } from '../Components'
import { customFetch } from '../utils/index'
const url = '/products?featured=true'
export const loader = async () => {
  const response = await customFetch(url)
  const data = response.data.data
  return { data }

}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
    </>
  )
}

export default Landing