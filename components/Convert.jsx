import { Box } from '@chakra-ui/react';
import CurrencyInput from './CurrencyInput'
import { useState, useEffect } from "react";
import axios from "axios";


export default function Convert() {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('USD');
    const [rates, setRates] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/latest',
            headers: {
                'X-RapidAPI-Key': '602b4970d8msh2fd9d9fbe2160e1p1916a8jsnfff28447d513',
                'X-RapidAPI-Host': 'fixer-fixer-currency-v1.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setRates(response.data.rates)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        if (!!rates) {
            handleAmount1Change(1);
        }
    }, [rates]);

    function format(number) {
        return number.toFixed(4);
    }

    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount2(format(amount2 * rates[currency1] / rates[currency2]));
        setAmount1(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount2(format(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }


    return (
        <>
            <meta name="author" content="Advanced Dynamic Content Project" />
            <meta property="title" content="FindAPlace" />
            <meta property="description" content="FindAPlace showcases live real estate listings that can be sorted in all sorts of ways!" />
            <link rel="icon" href="/favicon.ico" />

            <Box>
                    <CurrencyInput
                        onAmountChange={handleAmount1Change}
                        onCurrencyChange={handleCurrency1Change}
                        currencies={Object.keys(rates)}
                        amount={amount1}
                        currency={currency1}
                    />
                    <CurrencyInput
                        onAmountChange={handleAmount2Change}
                        onCurrencyChange={handleCurrency2Change}
                        currencies={Object.keys(rates)}
                        amount={amount2}
                        currency={currency2}
                    />
            </Box>
        </>
    )
}