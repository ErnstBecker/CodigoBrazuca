function reverterArray<T>(items: T[]): T[] {
	const filtro = items.filter(item => typeof item === 'number' || typeof item === 'string' || typeof item === 'boolean');
	return filtro.reverse();
}
console.log(reverterArray([1, 2, 3])); // [3, 2, 1]
console.log(reverterArray(['a', 'b', 'c'])); // ["c", "b", "a"]

console.log(reverterArray([1, 2, 3, 'a', 'b', 'c'])); // ! ["c", "b", "a", 3, 2, 1]
console.log(reverterArray(['special', 84, false, 'softly', '/&!@!#', 33, 'poor', 'silly', true]))
// ! Resultado: true, 'silly', 'poor', 33, '/&!@!#', 'softly', false,84, 'special'
