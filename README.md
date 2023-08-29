# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is the mini project for learning React Hooks
**Definition**:Hooks allow us to "hook" into React features such as state and lifecycle methods.Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

In this project, we are using **useState** Hook that allows us to track state in function component

## Note:
To use the useState Hook, we first need to import in into our component
``` import { useState } from "react"; ```

*useState* accepts an initial state and returns two values:
- The current State
- A function the updates the state

```
import { useState } from "react";

function chooseNumber() {
  const [number, setNumber] = useState("");
}
```