import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {
    return (
        <div>
            {
                <p className='flex items-center gap-1'><span><AiFillCheckCircle className='text-green-300'></AiFillCheckCircle></span>{feature}</p>
            }
            
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;