//Array Buffer

// console.log("h".charCodeAt());
// console.log("i".charCodeAt());

// let buffer = new ArrayBuffer(2);
// let view = new DataView(buffer);

// view.setInt8(0, 104);
// view.setInt8(1, 105);

// console.log(String.fromCharCode(view.getInt8(0))); // h
// console.log(String.fromCharCode(view.getInt8(1))); // i
// // console.log(view.getInt8(0));
// console.log(buffer.length);

// ***** new textDecoder  ****
// let unit = new Uint8Array([104, 105]);
// let decoder = new TextDecoder();
// let encoder = new TextEncoder();
// console.log(decoder.decode(unit)); // ascii ro char
// console.log(encoder.encode("hi")); // char to ascii

//***  blob and file ****
//Blob- Binary Large Object
//Blob as URL- download
//ko'pincha url sifatida ishlatiladi ko'pincha

let blob = new Blob(["hello world"], { type: "text/plain" });
console.log(blob);
down.onclick = () => {
    fetch(
            "data:image/jpeg;base64,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"
        )
        .then((res) => res.blob())
        .then((res) => {
            // console.log(res);
            let url = URL.createObjectURL(res);
            img.src = url;
        });
    let a = document.createElement("a");
    let url = URL.createObjectURL(blob);
    console.log(url);
    a.href = url;
    a.download = "Download text";
    document.body.append(a);
    a.click();
};

const getFile = (e) => {
    console.log(e.target.files[0]);
    let url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    img.src = url;
};