// copied from https://stackoverflow.com/questions/34238131/how-to-separate-html-text-file-into-multiple-files#answer-75149988
async function getFileContentAsText(file) {
    const response = await fetch(file);
    const fileContent = await response.text();
    return fileContent;
}

async function insertContentsFromFiles() {
    const tbl = document.querySelectorAll('[data-src]'); // get elements with the data attribute "data-src"
    for (var i=0; i < tbl.length; i++) // loop over the elements contained in tbl
        tbl[i].innerHTML = await getFileContentAsText(tbl[i].dataset.src);
}

// dont forget to call the function to insert the files content into the elements
insertContentsFromFiles();