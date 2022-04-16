let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', 'deb']
}
function organizeFn(dirPath) {
    // console.log("Organize command implemented for", dirPath);
    // 1. input -> directory path given // input lena hoga // agr hum path pass nhi krte h to undefined de dega..
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {
            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files");
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
        } else {
            console.log("Kindly enter the correct Path");
            return;
        }
    }
    organizeHelper(dirPath, destPath); // jisko organize krna hai.. aur jaha pr organize krna hai.. wo pass kr do


   


    
}
function organizeHelper(src, dest) {
    // 3. identify categories of all the files present in that input directory ->
    //for this we have to read then identify
    let childNames = fs.readdirSync(src);
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i], "belongs to -->", category);
            // 4. copy / cut files to that organized directory inside of any of category folder
            sendFiles(childAddress, dest, category);
        }
    }

}
//important
function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // console.log(fileName, "copied to ", category);


    // fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}
function getCategory(name) {
    let ext = path.extname(name);
    // console.log(ext);
    ext = ext.slice(1);
    // console.log(ext);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others"
}

module.exports={
    organizeKey: organizeFn
}