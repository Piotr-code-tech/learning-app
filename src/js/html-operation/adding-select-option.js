const addSelect = (className) => {

    const newSelectHTML = document.createElement("select");
    newSelectHTML.classList.add(className);
    return newSelectHTML;
}

export const addOption = (obj) => {
    const {
        destination,
        selectClassName,
        headingName,
        options,
    } = obj;
    const selectHTML = addSelect(selectClassName);
    const optionHeading = document.createElement("option");
    optionHeading.innerHTML = headingName;
    selectHTML.appendChild(optionHeading);
    const optionArray = Object.keys(options);
    optionArray.forEach((option) => {
        const newOption = document.createElement("option");
        newOption.innerHTML = option;
        newOption.value = options[option];
        selectHTML.appendChild(newOption)
    });
    const selectDestination = document.querySelector(destination);
    selectDestination.appendChild(selectHTML);
}


