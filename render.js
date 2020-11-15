function render(template, data) {
    return template.replace(/\{\{(.*?)\}\}/g, (_, str) => data[str])
}
