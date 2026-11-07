const elementosFake = [
    {
        tagName: 'DIV',
        style: { color: 'blue', display: 'flex'},
        classList: ['container', 'active']
    },
    {
        tagName: 'H1',
        style: { color: 'red', display: 'block'},
        classList: ['title']
    },
    {
        tagName: 'BUTTON',
        style: { color: 'white', display: 'inline-block'},
        classList: ['btn', 'btn-primary']
    }
];


elementosFake.forEach (elementos => {
    console.log(
        `Nome da tag: ${elementos.tagName} possui ${elementos.classList.at.length} classe (s).`
    );
});