export default function hasDuplicates(array: string[]): boolean {
    return (new Set(array)).size !== array.length;
}