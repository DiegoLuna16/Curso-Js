export const environmentsComponent = (element) => {

    const html = `
        DEV: ${import.meta.env.DEV} <br/>
        DEV: ${import.meta.env.PROD} <br/>
    `;

    element.innerHTML = html

}