import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakoutForm from "./CheakoutForm";


const stripePromise= loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading={"payment"} subHeading={"Please Pay to Eat"}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
               <CheakoutForm></CheakoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;