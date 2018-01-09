# platiziverse-db

## Usage

```js

const setupDatabase = require('platiziverse-db')

setupDatabase(config).then(db => {
  const { Agent, Metric } = db
}).catch(err => console.error(err))
```
