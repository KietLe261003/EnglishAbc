export function convertHtmlToPlainText(htmlString: string | null): string {
    const tempDiv = document.createElement('div');
    if(htmlString)
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || '';
}