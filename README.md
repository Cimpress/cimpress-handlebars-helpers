# A set of simple handlebars helpers

## Included helpers
* **[flatMap](#flatMap)**
* **[filterByValues](#filterByValues)** 

## Usage

### flatMap

```js
import {flatMapHelper} from 'cimpress-handlebars-helpers';
handlebars.registerHelper("flatMap", flatMapHelper);
```

##### Params
* `array` - an array to iterate over 
* `path` - a path that identifies the element to take

##### Example
```handlebars 
{{flatMap array "itemId"}}
```



### filterByValues
```js
import {filterByValuesHelper} from 'cimpress-handlebars-helpers';
handlebars.registerHelper("filterByValues", filterByValuesHelper);
```

##### Params
* `collection` - an array to iterate over 
* `element` - element to use for filtering
* `values` - filter the array based on these values

##### Example
```handlebars
{{filterByValues items 'itemId' [ '1', '2', '3' ] }}
```

