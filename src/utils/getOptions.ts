export default function getOptions(...args: any[]): string[] {
    if (args[2] && Array.isArray(args[2].args)) {
        return args[2].args
    }
    return []
}
