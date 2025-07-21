import {US,GH,EU, FlagComponent} from "country-flag-icons/react/1x1"


export const currencyLists:{
    value:string;
    label:string;
    details:{
        country:string;
        currencySymbol:string;
        currencyName:string;
        currencyShortForm:string;
        icon:FlagComponent;
        iconName:string
    };
    
}[]=[
    {
        value:"GH",
        label:"GH",
        details:{
            country:"Ghana",
            currencySymbol:"₵",
            currencyName:"Ghana cedis",
            currencyShortForm:"GHS",
            icon:GH,
            iconName:"GHS"
        },
    },
        {
                value: "USD",
                label: "USD",
                details: {
                country: "United States",
                currencySymbol: "$",
                currencyName: "United States Dollar",
                currencyShortForm: "USD",
                icon: US,
                iconName: "US",
                },
    },
    {
            value: "EUR",
            label: "EUR",
            details: {
            country: "European Union",
            currencySymbol: "€",
            currencyName: "Euro",
            currencyShortForm: "EUR",
            icon: EU,
            iconName: "EU",
            },
        },
]


