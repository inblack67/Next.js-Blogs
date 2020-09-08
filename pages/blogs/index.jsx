import fs from 'fs';
import BlogItem from '../../components/BlogItem';

const blog = ({ blogs }) => {

    return (
        <div className='container'>
            <h4 className="center red-text">Blogs</h4>
            <div className="row">
                {blogs.map(blog => <BlogItem key={blog} blog={blog} />)}
            </div>
        </div>
    )
}

export const getStaticProps = async () => {

    const files = fs.readdirSync('mdData');
    const blogs = files.map(filename => filename.replace('.md', ''));

    return {
        props: {
            blogs
        }
    }
}

export default blog


