import React from 'react'

const calculation = (element) => {
    var result = 0;
    var list = [];
    var state = element;
    if (element.includes('+')) {
        element = element.split('+');
        result = (parseInt(element[0]) + (parseInt(element[1])));
        console.log(result);

    }
    else if (element.includes('-')) {
        element = element.split('-');
        result = (parseInt(element[0]) - (parseInt(element[1])));
        console.log(result);
    }
    else if (element.includes('*')) {
        element = element.split('*');
        result = (parseInt(element[0]) * (parseInt(element[1])));
        console.log(result);
    }
    else if (element.includes('/')) {
        element = element.split('/');
        result = (parseInt(element[0]) / (parseInt(element[1])));
        console.log(result);
    }
    else if (element.includes('%')) {
        element = element.split('%');
        result = (parseInt(element[0]) % (parseInt(element[1])));
        console.log(result);
    }
    else if (element.includes('[') && element.includes(']')) {
        element = element.replace("[", "");
        element = element.replace("]", "");
        element = element.split(',');
        var sum = 0;
        for (var index = 0; index < element.length; index++) {
            sum += parseInt(element[index]);
        }
        result = sum;
    }
    else {
        return element;
    }

    let history = {
        statement: state,
        resul: result,
    };

    list = [history, ...list];
    console.log(list);
    return result;

}

export default calculation