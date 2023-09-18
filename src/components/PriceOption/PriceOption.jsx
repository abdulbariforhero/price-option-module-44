import { PropTypes } from "prop-types";
import Feature from "../Feature/Feature";


const PriceOption = ({ option }) => {
    const { name, price, features } = option

    return (
        <div className=" flex flex-col bg-blue-300 rounded-md text-white p-4 mb-4">
            <h2 className="text-center">
                <span className="text-7xl  font-extrabold">{price}</span>
                <span className="text-2xl">/Mon</span>
            </h2>
            <h4 className="text-3xl text-center my-4 font-bold">{name}</h4>
            <div className="flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature} ></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-600 w-full py-2 rounded-lg hover:bg-stone-900">Buy Now</button>
        </div>

    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}
export default PriceOption;