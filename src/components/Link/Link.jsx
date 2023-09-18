import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (       
            <li className="mr-6  hover:bg-yellow-500">
            <a href={route.path}>{route.name}</a>
            </li>         
       
    );
};


Link.propTypes ={
    route: PropTypes.array.isRequired,

}

export default Link;