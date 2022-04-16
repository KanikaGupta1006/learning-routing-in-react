import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const AddNewQuote = () => {

    const { sendRequest, status } = useHttp(addQuote);

    const history = useHistory();

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = quoteData =>{

        sendRequest(quoteData);

    }; 

    return(

        <div>
        <h1>Add new Quote page</h1>
        <QuoteForm isLoading={status === 'pending'} onAddQuote ={addQuoteHandler} />
        </div>
    );
};

export default AddNewQuote;