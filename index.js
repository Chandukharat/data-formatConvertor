
module.exports={
    jsonToYaml : function jsonToYaml(jsonData) {
        try {
          const data = JSON.parse(jsonData);
          let yamlData = '';
          for (const key in data) {
            yamlData += `${key}: ${data[key]}\n`;
          }
          return yamlData;
        } catch (err) {
          console.error(err);
        }
      }
   
}