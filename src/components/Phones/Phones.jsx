import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([])

  useEffect( () =>{
//         fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
//         .then(res => res.json())
//         .then(data => setPhones(data.data))
axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then( data => {
    const phoneData = data.data.data
    const phoneWithFakeData = phoneData.map(phone => {
        const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split('-')[1])
        }
        return obj;

    })
    setPhones(phoneWithFakeData)
    console.log(phoneWithFakeData);
})

    },[])  

   

    console.log(phones);

    return (
        <div>
            <h2 className='text-5xl'> Phones : {phones.length}</h2>      
            <BarChart height={400} width={800} data={phones}>
                <Bar dataKey='price' fill="#8884d8"></Bar>

            </BarChart>
        </div>
    );
};

export default Phones;