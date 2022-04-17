function helpFn(dirPath) {
    //jish order me likhunga usi order me likhayega back tick se
    console.log(`
    List of All the commands:
            node main.js tree "directoryPath"
            node main.js organize "directoryPath"
            node main.js help "directoryPath"
    
    List of command when you use this through command prompt:
            fis help
            fis organize "directoryPath"
            fis tree "directoryPath"
        `)
}

module.exports={
    helpKey: helpFn
}