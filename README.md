# data-formatConvertor
 
 jsonToYaml()
 this function converts a JSON object to Yaml format , this function takes a string containing JSON data as its input and returns the corresponding YAML data as a string.
 
 to use this function, you would call it with a string containing your JSON data as its argument, like so:

const jsonData = '{"name": "John", "age": 30, "city": "New York"}';
const yamlData = jsonToYaml(jsonData);
console.log(yamlData);

This would output the YAML representation of the JSON data to the console:

name: John
age: 30
city: New York
 
