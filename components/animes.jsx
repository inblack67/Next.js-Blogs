import animes from '../src/data.json';

const index = () => {

    return (
        <div>
            <h1>Second arg of JSON.stringifiy</h1>
            <div>
                <h3>null</h3>
                <pre>
                    {JSON.stringify(animes, null, 2)}
                </pre>
            </div>
            <div>
                <h3>Array - Filter result based on keys</h3>
                <pre>
                    {JSON.stringify(animes, ['name'], 2)}
                </pre>
            </div>
            <div>
                <h3>function</h3>
                <pre>
                    {JSON.stringify(animes, (key, value) => {
                        if (key.match('keyword')) {
                            return '❌confidential❌';
                        }
                        return value;
                    }, 2)}
                </pre>
            </div>
        </div>
    )
}

export default index;
