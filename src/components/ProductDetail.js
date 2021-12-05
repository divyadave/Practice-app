import { useParams } from "react-router";

const ProductDetail = () => {
    const params = useParams();
    return (
        <section>
        <h1>Product Detail Page</h1>
        <p>{ params.productId }</p>
        </section>
         
    )

}
export default ProductDetail;