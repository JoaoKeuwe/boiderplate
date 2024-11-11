module.exports = (plop) => {
  plop.setGenerator("basics", {
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: " qual nome do component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/stories/{{pascalCase name}}/index.tsx",
        templateFile: "generators/templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/stories/{{pascalCase name}}/stories.tsx",
        templateFile: "generators/templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/stories/{{pascalCase name}}/styles.ts",
        templateFile: "generators/templates/style.ts.hbs",
      },
    ],
  });
};
