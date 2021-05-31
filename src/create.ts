import fs from 'fs'
import path from 'path'
import getOptions from './utils/getOptions'
import inquire from './utils/inquireWithHandle'
import copy from './utils/copy'

export default async function create(...args: any): Promise<void> {
    const options = getOptions(...args)
    let projectName = 'handsome-mmc'
    if (options.length === 0) {
        projectName = await getProjectName()
    } else {
        projectName = args[0]
    }
    const templateType = await getTemplateType()
    fs.mkdirSync(`${projectName}`)
    copy(
        `${process.cwd()}/${projectName}`,
        path.resolve(__dirname, `../template/${templateType}`)
    )
}

async function getProjectName() {
    const { projectName } = await inquire([
        {
            type: 'input',
            message: '请输入要创建的项目名',
            name: 'projectName',
            default: 'handsome-mmc',
        },
    ])
    return projectName
}

async function getTemplateType() {
    const templateTypeList = getTemplateTypeList()
    const { templateType } = await inquire([
        {
            type: 'list',
            choices: templateTypeList,
            name: 'templateType',
        },
    ])
    return templateType
}

function getTemplateTypeList() {
    const templatePath = path.resolve(__dirname, '../template')
    console.log(templatePath)
    try {
        const dirRet = fs.readdirSync(templatePath)
        dirRet.includes('.DS_Store') &&
            dirRet.splice(dirRet.indexOf('.DS_Store'), 1)
        return dirRet
    } catch (e) {
        console.log(e)
    }
    return []
}
