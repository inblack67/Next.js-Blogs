import Link from 'next/link';

const BlogItem = ({ blog }) => {
    return (
        <div className='col m12 l6 s12'>
            <div className="card grey darken-4 center">
                <div className="card-content white-text">
                    <span className="card-title">
                        {blog}
                    </span>
                </div>
                <div className="card-action">
                    <Link as={`/blogs/${blog}`} href='/blogs/[slug]'>
                        <a>
                            Explore
                    </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
