import inquirer from 'inquirer'

export default async function inquire(...args: any): Promise<any> {
    try {
        // @ts-ignore
        const ret = await inquirer.prompt(...args)
        return ret
    } catch (e) {
        throw new Error(`
            inquireWithHandle: ${args};\n
            error: ${e}
        `)
    }
}
