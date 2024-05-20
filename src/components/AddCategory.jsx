import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event)  => {
        event.preventDefault();
        if(inputValue.trim().length <=1) return;
        // setCategories(category => [ inputValue, ...category]);
        onNewCategory (inputValue.trim().toLowerCase())
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar Gifts" value={inputValue} onChange={ onInputChange} />
        </form>
        
    )
}

export default AddCategory
