---
title: use-custom-fetch-suspense
description: Ajax Calls With React Suspense
---

- That hassle free hook which takes care of all that loading/loaded state hack we have to do while making ajax calls in React.JS.

- use-custom-fetch-suspense plays along with React Suspense and under the hood with cache management packages

```js
lru-cache, immer, md5 etc.
```

- Until the data is fetched, the suspense will catch the promise thrown by use-custom-fetch-suspense and will render fallback, which can by any Loading component of your choice. After the promise is resolved, suspense will then render the component.
Also, it has been made sure that it doesn't make the same ajax call request again and again. For this, data is stored in cache.

### Installation

```sh
yarn add use-custom-fetch-suspense

or

npm i use-custom-fetch-suspense

```

### Usage

```js

// Ajax call without any useEffect or  unecessary loading/loaded state handling thing.
import useFetchSuspense from 'use-custom-fetch-suspense';

const SomeThang = () => {

    const res = useFetchSuspense(`https://some-api.com`);

    return (
        <div className='container'>
        <h1>use-custom-fetch-suspense demo</h1>
            <ol className='collection'>
                { res.data.map(data => <li className='collection-item' key={data.id}>
                    { data.title }
                </li>) }
            </ol>
        </div>
    )
}

const Preloader = () => {
    return (
        <p>Loading...</p>
    )
}

// Loading our component with React Suspense
const Demo = () => {
    return (
        <React.Suspense fallback={<Preloader />}>
            <SomeThang />
        </React.Suspense>
    )
}
```

### Repository

[Explore](https://github.com/inblack67/use-custom-fetch-suspense)

### About The Author

[Website](https://inblack67.vercel.app)

[Github](https://github.com/inblack67)

