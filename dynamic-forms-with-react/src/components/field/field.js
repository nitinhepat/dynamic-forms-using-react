import React from 'react';

const field = (props) => {
    const fieldConfig = props.fieldConfig;
    let element = null;
    let classes = [];
    if (fieldConfig.touched && !fieldConfig.valid) {
        classes.push('invalid')
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
        case 'select':
            break;
        case 'checkbox':
            break;

    }

    return (
        <div>
            <label>{fieldConfig.label}</label>
            <div>
                {element}
            </div>
        </div>
    )


}


export default field;
