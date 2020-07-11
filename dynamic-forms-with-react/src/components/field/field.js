import React from 'react';

const field = (props) => {
    const fieldConfig = props.fieldConfig;
    let element = null;
    let classes = ['field'];
    let errorMessage = null;
    if (fieldConfig.touched && !fieldConfig.valid) {
        classes.push('invalid');

    }
 console.log('rendered');




    switch (fieldConfig.type) {
        case 'input':
            element = (<input type={fieldConfig.config.type}
                name={fieldConfig.id}
                value={fieldConfig.value}
                className={classes.join(' ')}
                placeholder={fieldConfig.placeholder}
                required={fieldConfig.validation.required}
                onBlur={props.focused}
                minLength={fieldConfig.validation.minLength}
                onChange={props.changed}
                maxLength={fieldConfig.validation.maxLength}
            />);
            break;
            case ( 'textarea' ):
                element = <textarea
                value={fieldConfig.value}
                className={classes.join(' ')}
                placeholder={fieldConfig.placeholder}
                required={fieldConfig.validation.required}
                onBlur={props.focused}
                minLength={fieldConfig.validation.minLength}
                onChange={props.changed}
                maxLength={fieldConfig.validation.maxLength}   
                />;
                break;
            case ( 'select' ):
                element = (
                    <select
                    value={fieldConfig.value}
                    className={classes.join(' ')}
                    required={fieldConfig.validation.required}
                    onBlur={props.focused}
                    onChange={props.changed}>
                        <option>{fieldConfig.placeholder}</option>
                        {fieldConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
                );
                break;
           

    }

    return (
        <div className="field-wrapper">
           {element}
        </div>
    )


}


export default field;
