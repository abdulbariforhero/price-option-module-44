import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const PriceOptions = [
        {
            "id": "basic",
            "name": "Basic Membership",
            "features": [
                "Access to cardio equipment",
                "Access to strength training area",
                "Locker room access",
                "Discounts on group fitness classes",
                "Online workout videos",
                "Monthly fitness assessment"
            ],
            "price": "$29.99"
        },
        {
            "id": "premium",
            "name": "Premium Membership",
            "features": [
                "Full access to all gym facilities",
                "Unlimited group fitness classes",
                "Access to sauna and spa",
                "Personal trainer sessions (2/month)",
                "Nutrition consultation",
                "Access to exclusive members-only events",
                "Free guest pass (1/month)"
            ],
            "price": "$49.99"
        },
        {
            "id": "family",
            "name": "Family Membership",
            "features": [
                "Membership for two adults and two children",
                "Access to all gym facilities",
                "Discounts on kids' fitness programs",
                "Access to family-friendly fitness classes",
                "Family locker room access",
                "Children's play area supervision",
                "Access to family fitness challenges"
            ],
            "price": "$79.99"
        }
    ]



    return (
        <div>
            <h2 className="text-5xl text-center mt-5 mb-3">Best Prices in the town</h2>
            <div className="lg:grid grid-cols-3 gap-4 mx-2 md:py-7">

                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                }

            </div>
        </div>
    );
};

export default PriceOptions;