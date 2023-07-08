# SportsFusion

This project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<!-- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. -->

## Project Conventions

### Naming

1. variables names should be `noun word/phrases` while functions should be `verb`

     Examples: 
    ``` javascript
        let name = 'entertainment'; // variable name

        const getLastName = () => { return 'fusion' }; // function name
    ``` 
2. variables should use camelCase naming conventions

     Examples: 
    ``` javascript
        var tag = 'entertainment';
        var firstName = 'sports';
        var getLastName = () => { return 'fusion' };
    ``` 

3. Global constants should should use all uppercase with the snake-case naming conventions.

    Examples: 
    ``` javascript
        const APP_NAME = 'SportsFusion';
    ``` 

4. Boolean variables or function that returns Boolean value should should start with `is` prefix.

    Examples: 
    ``` javascript
        var isString = true;

        var isValid = () => { return true; }; //
    ``` 

5. UI rendering javascript files should use the `.jsx` extension, all components filename should be PascalCase
    ```
    Component.jsx
    MyComponent.jsx
    ```

6. All components in pages directory should be all lowercase, multi words should be separated by hyphen
    ```
    page.jsx
    my-page.jsx
    ```

### Imports/Exports

* All Component should be **_named exports_**, except component in `/pages` directory which requires default exports

* All lib/utils functions should be named exports

## Git 

### Commit Messages

git commit messages should follow the git commit message format as specified in [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0), for more `types/scopes` refer  [Angular Convention](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) to see other commit messages types and/or scopes.

### Work Flow

To work on a feature, pull the code and chectout to a feature branch (using the features as branch name). When done, pull the lastest update (if any) on the parent branch, merge the branches and resolve conflict (if any) before pushing the feature branch to github.

After pushing, create a Pull Request and wait for it to be merged into the parent branch (please do not resolve the Pull Request yourself, contact the team lead or anyone designated to handle PRs).
