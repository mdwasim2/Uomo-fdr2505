import Paginate from "../common/Paginate"
import Container from "../ui/Container"

const AllProducts = ({items, view}) => {
  return (
    <section>
        <Container >
            <div style={{ gridTemplateColumns :`${view == 2 ? "1fr 1fr " : view ==3? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"}`}} className={`grid   gap-x-7.5 gap-y-15`}>
            </div>
            <Paginate itemsPerPage={12} products={items}/>
        </Container>
    </section>
  )
}

export default AllProducts