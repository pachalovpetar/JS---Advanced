function editElement(element, matcher, replacer) {
    const text = element.textContent;

    const pattern = new RegExp(matcher, 'g');
    const result = text.replace(pattern, replacer);
    element.textContent = result;
}