import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import marked from 'marked';
import Head from 'next/head';
import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlocks from '../../components/CodeBlocks';
import Footer from '../../components/Footer';

const blog = ({ data: { title, description }, htmlString, content }) => {

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div className='container'>
                <div className="center">
                    <h4>
                        {title}
                    </h4>
                    <p className='flow-text red-text'>
                        {description}
                    </p>
                </div>
                <ReactMarkdown
                    source={content}
                    renderers={{ code: CodeBlocks }}
                />
            </div>
            <Footer />
        </Fragment>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync('mdData');
    const paths = files.map(filename => {
        return {
            params: {
                slug: filename.replace('.md', '')
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const mdData = fs.readFileSync(path.join('mdData', slug + '.md'));

    const data = grayMatter(mdData);

    const htmlString = marked(data.content);

    return {
        props: {
            htmlString,
            data: data.data,
            content: data.content
        }
    }
}

export default blog


