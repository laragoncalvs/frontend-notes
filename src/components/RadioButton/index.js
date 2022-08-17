import * as React from 'react';
import Radio from '@mui/material/Radio';
import './style.css'

export default function RadioButton() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='radioGroup'>
            <div className='radioOptions'>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                    sx={{
                        color: '#ffd3ca',
                        '&.Mui-checked': {
                            color: '#eb8f7a',
                        },
                    }}

                />
                <span>Todos</span>
            </div>
            <div className='radioOptions'>
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                    sx={{
                        color: '#ffd3ca',
                        '&.Mui-checked': {
                            color: '#eb8f7a',
                        },
                    }}

                />
                <span>Importante</span>
            </div>
            <div className='radioOptions'>
                <Radio
                    checked={selectedValue === 'c'}
                    onChange={handleChange}
                    value="c"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'C' }}
                    sx={{
                        color: '#ffd3ca',
                        '&.Mui-checked': {
                            color: '#eb8f7a',
                        },
                    }}

                />
                <span>Normal</span>
            </div>
            

        </div>
    );
}
