# React Props

## Introduction
Props (short for "properties") are used in React to pass data from one component to another. They allow components to be dynamic and reusable.

## Using Props in React

### 1. Passing Props to a Component
Props are passed to a component as attributes:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Ajit" />;
}

export default App;
```

### 2. Destructuring Props
Instead of using `props.name`, you can directly destructure props:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 3. Default Props
If no prop is provided, you can set default values:

```jsx
function Greeting({ name = "Guest" }) {
  return <h1>Hello, {name}!</h1>;
}
```

### 4. Passing Multiple Props
Props can be used to pass multiple values:

```jsx
function UserProfile({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

function App() {
  return <UserProfile name="Ajit" age={25} />;
}

export default App;
```

### 5. Prop Types Validation (Optional)
To enforce prop types, you can use `prop-types`:

```jsx
import PropTypes from 'prop-types';

function UserProfile({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default UserProfile;
```

## Conclusion
Props help make React components more dynamic and reusable by passing data between components. Using default values and prop type validation ensures reliability and flexibility.

---

Let me know if you need modifications! 🚀

