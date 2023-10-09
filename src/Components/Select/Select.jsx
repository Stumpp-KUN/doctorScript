import ReactSelect from 'react-select'
import { styles } from './selectConfig'
import icon from '../../Assets/images/chevrondown.svg'


const CaretDownIcon = () => {
    return (
        <>
            <img 
                src={icon} 
                alt="chevron down" 
                style={ {padding: '10px 12px'} }
            />
        </>
    );
};


const Select = ({ options, handleSelect }) => {
	return (
        <>                       
            <ReactSelect
                options={options}
                placeholder='Выбрать'
                onChange={handleSelect}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator: () => <CaretDownIcon />
                }}
                styles={styles}
            />
        </>
	)
}

export default Select