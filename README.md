# aphrodite-enhancer
Small Aphrodite utilities for plain object support. Isn't really ideal, but works.

### Install
```
yarn add aphrodite-enhancer
```
> Make sure to install aphrodite first
### Usage

```jsx
import css from 'aphrodite-enhancer';

function View() {
  return (
    <div {...css({flex: 1, flexDirection: 'row'})} />
  );
}

// or

function View() {
  return (
    <div {...css([styles.foo, {width: 500}}])} />
  );
}

// or some crazy shit

function View() {
  return (
    <div {...css([styles.foo, {width: 500}, null, [[{styles.bar}], null]}])} />
  );
}

let styles = StyleSheet.create({
  foo: {
    flex: 1,
  },
  bar: {
    flexDirection: 'column',
  }
});

```


`css()` returns with the following format:
```
{className: [], style: {}}
``` 
So you can do whatever you want with it.

Peace :v:
