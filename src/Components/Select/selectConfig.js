export const styles = {
    container: (baseStyles,state) => ({
        ...baseStyles,
        padding: '0px 0 0 10px'
    }),
    control: (baseStyles, state) => ({
        ...baseStyles,
        color: 'inherit',
        outline: 'none',
        border: '2px solid #ABABB5',
        boxShadow: 'none',
        borderRadius: '4px 4px 0px 0px',
        height: '56px',
        "&:hover": {
            outline: 'none',
            cursor: 'pointer'
        },
    }),
    valueContainer: (baseStyles, state) => ({
        ...baseStyles,
        padding: '8px 12px',

    }),
    singleValue: (baseStyles, state) => ({
        ...baseStyles,
        color: 'inherit',
        margin: '0',
        padding: '8px 12px',

    }),
    input: (baseStyles, state) => ({
        ...baseStyles,
        color: 'inherit',
        

    }),
    menu: (baseStyles, state) => ({
        ...baseStyles,
        borderRadius: '4px',
        padding: '0',
        boxShadow: '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        color: 'inherit',
        marginTop: '8px',
        position: 'relative',
        marginBottom: '0',
        "&:active": {
            backgroundColor: 'none'
        }
    }),
    option: (baseStyles, state) => ({
        ...baseStyles,
        
        padding: '8px 16px',
        backgroundColor: 'transparent',
        color: state.isSelected && 'inherit',
        border: "2px solid transparent",
        "&:hover": {
            backgroundColor: 'transparent',
            border: "2px solid #6750A4",
        },
        "&:active": {
            backgroundColor: 'transparent',
        },
    }),
}