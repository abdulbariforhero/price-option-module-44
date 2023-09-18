import { LineChart as LChart, Line, XAxis,YAxis } from 'recharts';
const LineChart = () => {

    const studentData = [
        {"id": 1, "name": "Alice Smith", "math": 85, "physics": 78, "chemistry": 92},
        {"id": 2, "name": "Bob Johnson", "math": 92, "physics": 89, "chemistry": 85},
        {"id": 3, "name": "Charlie Brown", "math": 78, "physics": 80, "chemistry": 76},
        {"id": 4, "name": "David Wilson", "math": 88, "physics": 86, "chemistry": 90},
        {"id": 5, "name": "Eva Davis", "math": 95, "physics": 92, "chemistry": 88},
        {"id": 6, "name": "Frank Miller", "math": 75, "physics": 68, "chemistry": 72},
        {"id": 7, "name": "Grace Harris", "math": 89, "physics": 90, "chemistry": 87},
        {"id": 8, "name": "Henry Clark", "math": 91, "physics": 84, "chemistry": 89},
        {"id": 9, "name": "Isabella White", "math": 83, "physics": 79, "chemistry": 85},
        {"id": 10, "name": "Jack Taylor", "math": 87, "physics": 88, "chemistry": 91}
      ];

    return (
        <div className=''>
            <LChart width={500} height={400} data={studentData}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="physics" stroke='yellow' ></Line>
            </LChart>
        </div>
    );
};

export default LineChart;