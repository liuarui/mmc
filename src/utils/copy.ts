import fs from 'fs'

export default function copy(targetPath: string, sourcePath: string): void {
    let paths = fs.readdirSync(sourcePath)
    paths.forEach((path) => {
        var _source = sourcePath + '/' + path
        var _target = targetPath + '/' + path
        fs.stat(_source, function (err, stats) {
            if (err) throw err
            if (stats.isFile()) {
                let readable = fs.createReadStream(_source)
                let writable = fs.createWriteStream(_target)
                readable.pipe(writable)
            } else if (stats.isDirectory()) {
                checkDirectory(_target, _source, copy)
            }
        })
    })
}

function checkDirectory(
    targetPath: string,
    sourcePath: string,
    callback: Function
) {
    fs.access(targetPath, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(targetPath)
            callback(targetPath, sourcePath)
        } else {
            callback(targetPath, sourcePath)
        }
    })
}
