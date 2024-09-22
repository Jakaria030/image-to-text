const extractText = () => {
    const fileInput = document.getElementById("image-input");
    const outPut = document.getElementById("out-put");

    const imageFile = fileInput.files[0];

    if(!imageFile){
        outPut.innerText = "Please select an image file.";
        return;
    }

    Tesseract.recognize(
        imageFile,
        "eng"
    ).then(({data}) => {
        outPut.innerText = data.text;
    }).catch((error) => {
        console.error("Error: ", error);
        outPut.innerText = "Error";
    })
}